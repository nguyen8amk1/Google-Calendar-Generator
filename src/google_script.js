const COLORS = {
    BLUE : CalendarApp.EventColor.BLUE, 	
    BROWN : CalendarApp.EventColor.BROWN, 
    CHARCOAL: CalendarApp.EventColor.CHARCOAL, 
    CHESTNUT: CalendarApp.EventColor.CHESTNUT, 
    GRAY: CalendarApp.EventColor.GRAY, 
    GREEN:CalendarApp.EventColor.GREEN, 
    INDIGO: CalendarApp.EventColor.INDIGO, 
    LIME: CalendarApp.EventColor.LIME, 
    MUSTARD	: CalendarApp.EventColor.MUSTARD, 
    OLIVE: CalendarApp.EventColor.OLIVE, 
    ORANGE: CalendarApp.EventColor.ORANGE, 
    PINK: CalendarApp.EventColor.PINK, 
    PLUM: CalendarApp.EventColor.PLUM, 
    PURPLE	: CalendarApp.EventColor.PURPLE, 
    RED	: CalendarApp.EventColor.RED, 
    RED_ORANGE	: CalendarApp.EventColor.RED_ORANGE, 
    SEA_BLUE: CalendarApp.EventColor.SEA_BLUE, 
    SLATE: CalendarApp.EventColor.SLATE, 
    TEAL: CalendarApp.EventColor.TEAL, 
    YELLOW: CalendarApp.EventColor.YELLOW, 
    TURQOISE: CalendarApp.EventColor.TURQOISE, 
}; 

// red green blue orange yellow 
// TODO: hoc o truong first 
let schedule = [
    {
        name: "Lý thuyết: Cơ chế hoạt động của mã độc", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "08:15:00", 
        endTime: "09:45:00", 
        weekday: 3, 
        gap: 1, 
        description: "C212 (CLC) -  NT230.O21.ATCL - VN", 
        color: COLORS.RED, 
    }, 
    {
        name: "Thực hành: Cơ chế hoạt động của mã độc", 
        startDate: "4/3/2024", // NOTE: this is monday
        endDate: "1/6/2024", 
        startTime: "13:00:00", 
        endTime: "17:00:00", 
        weekday: 3, 
        gap: 2, 
        description: "B2.18 (PM) - NT230.O21.ATCL.1 - VN(HT1)", 
        color: COLORS.RED, 
    }, 
    {
        name: "Lý thuyết: Đồ họa máy tính", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "07:30:00", 
        endTime: "09:45:00", 
        weekday: 4, 
        gap: 1, 
        description: "B1.10 - CS105.O21.KHCL - VN", 
        color: COLORS.GREEN, 
    }, 
    {
        name: "Thực hành: Bảo mật web và ứng dụng", 
        startDate: "4/3/2024", // NOTE: this is monday
        endDate: "1/6/2024", 
        startTime: "07:30:00", 
        endTime: "11:30:00", 
        weekday: 5, 
        gap: 2, 
        description: "P B4.06 (PM) - NT213.O22.ATCL.1 - VN(HT1)", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Lý thuyết: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "08:15:00", 
        endTime: "09:45:00", 
        weekday: 6, 
        gap: 1, 
        description: "C301 (CLC) - NT213.O22.ATCL - VN", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Lý thuyết: Tư duy tính toán", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "13:00:00", 
        endTime: "15:15:00", 
        weekday: 6, 
        gap: 1, 
        description: "C214 (CLC) - CS117.O21 - VN", 
        color: COLORS.ORANGE, 
    }, 
    {
        name: "Thực hành: Các phương pháp lập trình", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "15/6/2024", 
        startTime: "07:30:00", 
        endTime: "10:45:00", 
        weekday: 7, 
        gap: 2, 
        description: "B4.10 - SE334.O21.PMCL - VN", 
        color: COLORS.YELLOW, 
    }, 
];  


// NOTE: this function only works correctly is the startdate is monday
function adjustAsyncWeekdateStateDate(event) {
    const weekday2offsetMapping = [0, 0, 0, 1, 2, 3, 4, 5, 6]; 

    var dateArray = event.startDate.split('/');
    const newDate = parseInt(dateArray[0], 10) + weekday2offsetMapping[event.weekday]; 
    const month = parseInt(dateArray[1], 10);
    const year = parseInt(dateArray[2], 10);

    const newEvent = {
        ...event, 
        startDate: `${newDate}/${month}/${year}`, 
    };

    return newEvent;
}

const modifiedSchedule = (schedule) => {
    const newArray = schedule.map(a => ({...a}));

    for(let i = 0; i < schedule.length; i++) {
        newArray[i] = adjustAsyncWeekdateStateDate(schedule[i]);
    }

    return newArray;
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


const weekdaysMapping= [0, 0, 
    CalendarApp.Weekday.MONDAY,
    CalendarApp.Weekday.TUESDAY,
    CalendarApp.Weekday.WEDNESDAY,
    CalendarApp.Weekday.THURSDAY,
    CalendarApp.Weekday.FRIDAY,
    CalendarApp.Weekday.SATURDAY,
    CalendarApp.Weekday.SUNDAY,
];

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

    /* NOTE: legacy recurrent events code 
    while(currentstart <= enddate) {
        console.log(currentstart, currentend);
        calendar.createEvent(name, currentstart, currentend)
        .setDescription(validEvent.description)
        .setColor(validEvent.color)
        ;
        currentstart = nextOccuringDate(new Date(currentstart), gap);
        currentend = nextOccuringDate(new Date(currentend), gap);
    }
    */

    //console.log(validEvent);

    const weekdays = [weekdaysMapping[validEvent.weekday]];

    // TODO: need to find a way to do occurence not only 1
    const eventSeries = calendar.createEventSeries(name,
        currentstart, 
        currentend,
        CalendarApp.newRecurrence().addWeeklyRule().interval(gap)
            .onlyOnWeekdays(weekdays)
            .until(enddate))
        .setDescription(validEvent.description)
        .setColor(validEvent.color)
        ;

    //Logger.log(startstring + " " + endstring);
}


const calendarID = "b87b6edad2f8bf0cf5420b087953f5d38f023331028031004e7b3849874b455c@group.calendar.google.com";

function calendarAutomation() {
    const calendar = CalendarApp.getCalendarById(calendarID);
    const correctedSchedule = modifiedSchedule(schedule);

    //calender.createEvent();
    /* const event = { */
    /*     name: "fucking test",  */
    /*     startDate: "19/2/2024", // NOTE: this is monday */
    /*     endDate: "1/6/2024",  */
    /*     startTime: "05:00:00",  */
    /*     endTime: "22:00:00",  */
    /*     weekday: 3,  */
    /*     gap: 2,  */
    /*     description: "this is a fucking test",  */
    /*     color: COLORS.ORANGE,  */
    /* }; */
    /**/
    //console.log(adjustAsyncWeekdateStateDate(event));
    //console.log(modifiedSchedule([event]));

    for(let i = 0; i < correctedSchedule.length; i++) {
        const event = correctedSchedule[i];
        createEvent(event, calendar);
    }
}

