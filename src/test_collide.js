function nextOccuringDate(startDate, gap) {
    let nextStartDate = new Date(startDate); 
    nextStartDate.setDate(nextStartDate.getDate() + gap*7);
    return nextStartDate; 
}

function generateDateString(date, time) {
    const months = ["ERROR",  "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];

    var dateArray = date.split('/');

    const newDate = parseInt(dateArray[0], 10); 
    const month = months[parseInt(dateArray[1], 10)];
    const year = parseInt(dateArray[2], 10);

    return `${month} ${newDate}, ${year} ${time} GMT+0700`;
}

function ddmmyyyDatesComparison(date1String, op, date2String, startTime) {
    const date1string = generateDateString(date1String, startTime);
    const date2string = generateDateString(date2String, startTime);

    let date1 = new Date(date1string);
    let date2 = new Date(date2string); 

    switch (op) {
        case '<':
            return date1 < date2;
        case '<=':
            return date1 <= date2;
        case '>':
            return date1 > date2;
        case '>=':
            return date1 >= date2;
        case '==':
            return date1.getTime() === date2.getTime();
        case '!=':
            return date1.getTime() !== date2.getTime();
        default:
            throw new Error('Invalid operator');
    }
}

function checkIfTwoEventCollide(event1, event2) {
    //
    // * NOTE: with 2 unmodified event, assume that they are starting from the same date  
    // * -> we going to compare them based on their: 
    // *     + weekday  -> the x 
    // *     + startTime  -> the y 
    // *     if the both match -> they have a tendency to collide 
        // *     -> we need to make sure THEY WILL COLLIDE 
        //      Using gap 
    const haveTendencyToCollide = event1.weekday   === event2.weekday &&
                                  event1.startTime === event2.startTime;
    if(haveTendencyToCollide) {
        // 2 important factors to consider: 
            // + startdate 
            // + gap 
        // -> 4 scenerios: 
            //-> same startdate and gap 
            //-> same startdate and different gap 
            //-> different startdate and same gap 
            //-> different startdate and different gap 
        
        const sameStartDate = event1.startDate == event2.startDate;
        const sameGap = event1.gap == event2.gap;

        if(sameStartDate && sameGap) {
            return true; 
        } else if(sameStartDate && !sameGap) {
            return true;
        } else if(!sameStartDate && sameGap) {
            // the amount of precalculated dates based on the differences between their startDate
            // calculation does on the one that start first 
            //
            let ealierEvent;
            let laterEvent;
            if(ddmmyyyDatesComparison(event1.startDate, "<", event2.startDate, event1.startTime)) {
                ealierEvent = event1;
                laterEvent = event2;
            } else {
                ealierEvent = event2;
                laterEvent = event1;
            }
            
            const currentDateString = generateDateString(ealierEvent.startDate, ealierEvent.startTime);
            const laterDateString = generateDateString(laterEvent.startDate, ealierEvent.startTime);
            let currentDate = new Date(currentDateString);
            let laterDate = new Date(laterDateString); 

            // Go til pass the later date 
            while(currentDate < laterDate) {
                currentDate = nextOccuringDate(currentDate, ealierEvent.gap);
            }

            const collideWithLaterOne = currentDate.getTime() == laterDate.getTime();
            return collideWithLaterOne; 

        } else {
            // TODO: different start date and different gap @Current
            // I think this problem is related to some kind of special Algorithm =))
            // 2 elements: 
                // + gap -> smaller gap, larger gap 
                // + start date -> earlier date, later date 
            return ;
        }
    } 

    // else not gonna collide 
    return false; 
}

const testevent1 = {
    name: "Tự học: Machine Learning", 
    startDate: "12/2/2024", // NOTE: this is monday
    endDate: "8/6/2024", 

    startTime: "17:00:00", 
    endTime: "18:30:00", 

    weekday: 8, 
    gap: 2, 
    description: "", 
}; 

const testevent2 = {
    name: "Machine Learning", 
    startDate: "19/2/2024", // NOTE: this is monday
    endDate: "8/6/2024", 

    startTime: "17:00:00", 
    endTime: "18:30:00", 

    weekday: 8, 
    gap: 2, 
    description: "", 
}; 

console.log(checkIfTwoEventCollide(testevent1, testevent2));
