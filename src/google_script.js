/*
 * NOTE: Merge hoc o truong and tu hoc
 *      need to have alternating between tu hoc and hoc o truong (should not overlap)
 *
Hoc o truong: 
    ... 

Tu hoc
    Bao Mat Web (****): 23 hours
        t2: tiet 1, 2, 3, 4, 5  = 3.75 -> 16.25 hours left
        t4: tiet 6, 7, 8, 9 = 3 -> 13.25 hours left 
        t7: tiet 6, 7, 8, 9 = 3 -> 10.25 hours left 
        t3: toi: 8h -> 12h  = 4 -> 6.25 hours left 
        t6: tiet 1, 4, 5  = 4 hours left 
        t6: toi: 8h -> 12h  = 0 hours left 

        t5: tiet 1, 2, 3, 4, 5  = 3.75 -> 0 hours left

    Ma Doc (***): 13 hours
        t2: tiet 6, 7, 8, 9 = 3 -> 7 hours left 
        t5: tiet 6, 7, 8, 9 = 3 -> 4 hours left 
        t7: toi: 8h -> 12h  = 4 -> 0 hours left 

        t3: tiet 6, 7, 8, 9 = 3 -> 0 hours left 

    Backend Web Project (***):  19 hours
        Project 1: 7 hours (focus on good CRUD and RestAPI)
        Project 2: 8 hours (focus on security, also with good CRUD and RestAPI)

        t3: toi: 8h -> 12h  = 4 -> 11 hours left 
        t4: toi: 8h -> 12h  = 4 -> 7 hours left 
        t5: toi: 8h -> 12h  = 4 -> 3 hours left 
        cn: tiet 6, 7, 8, 9 = 3 -> 0 hours left 
        
        t7: tiet 1, 2, 3, 4, 5  = 3.75 -> .25 hours left

    Tu Duy Tinh Toan (**): 5 hours
        t4: tiet 4, 5  = 1.5 -> 3.5 hours left 
        t3: toi 5h -> 6h30  = 1.5 -> 2 hours left 
        t5: toi 5h -> 6h30  = 1.5 -> .5 hours left 
        cn: tiet 2 -> .45         -> 0 hours left 
        
    Phuong Phap Lap Trinh (**): 5 hours
        t6: toi 5h -> 6h30  = 1.5 -> 3.5 hours left 
        t7: toi 5h -> 6h30  = 1.5 -> 2 hours left 
        cn: toi 5h -> 6h30  = 1.5 -> .5 hours left 
        t7: tiet 1 = .45p -> 0 hours left

    Do Hoa (**): 5 hours
        t3: tiet 1, 4, 5  = 2.25 -> 2.75 hours left 
        t3: toi 5h -> 6h30  = 1.5 -> 1.25 hours left 
        t2: toi 5h -> 6h30  = 1.5 -> 0 hours left 

    Machine Learning (*): 2 hours
        t2: tiet 3, 4, 5  = 2.25 -> 0 hours left

    Do An Chuyen Nganh (*): 4 hours (optional)
        cn: toi: 8h -> 12h  = 4 -> 0 hours left 
*/


// TODO: hoc o truong first 
/* let schedule = [ */
/*     { */
/*         name: "",  */
/**/
/*         startDate: "", // start hoc ki - global start */
/*         endDate: "",   // end hoc ki - global end  */
/* // */
/*         startTime: "",  */
/*         endTime: "",  */
/**/
/*         weekday: "", //t2, t3, t4, t5 */
/**/
/*         gap: "", */
/*     }, */
/* ];   */

// NOTE: this function only works correctly is the startdate is monday
const modifiedSchedule = (schedule) => {
    // TODO: 
    // input: startdate, weekday
    // output: new startdate
    
    return;
}


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


// NOTE: for now it's only works for event that start and end in a single day
function createEvent(event, calendar) {
    const validEvent = event;

    const name = validEvent.name;
    const gap = validEvent.gap;

    const startime = validEvent.startTime;
    const endtime = validEvent.endTime;

    const startdatestring = generateDateString(validEvent.startDate, startime);
    const enddatestring = generateDateString(validEvent.endDate, startime);

    let startdate = new Date(startdatestring);
    let enddate = new Date(enddatestring); 


    const startstring = generateDateString(validEvent.startDate, startime);
    const endstring = generateDateString(validEvent.startDate, endtime);

    let currentstart = new Date(startstring);
    let currentend = new Date(endstring); 

    while(currentstart <= enddate) {
        console.log(currentstart, currentend);
        calendar.createEvent(name, currentstart, currentend);
        currentstart = nextOccuringDate(new Date(currentstart), gap);
        currentend = nextOccuringDate(new Date(currentend), gap);
    }
}

const calendarID = "cdfe30a8b78a68585a29715496615866fc5b2373752a5cdda890b1c4db44b909@group.calendar.google.com";
function calendarAutomation() {
    const calendar = CalendarApp.getCalendarById(calendarID);
    //calender.createEvent();
    const event = {
        name: "fucking test", 
        startDate: "1/2/2024", 
        endDate: "1/3/2024", 
        startTime: "07:00:00", 
        endTime: "20:00:00", 
        gap: 2, 
    };
    createEvent(event, calendar);
}
