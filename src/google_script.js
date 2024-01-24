class CalendarEventGenerator { 
    // TODO: encapsulate everything in this class 
    constructor() { 
    }
}; 

const COLORS = {
    BLUE : CalendarApp.EventColor.BLUE, 	
    GRAY: CalendarApp.EventColor.GRAY, 
    GREEN:CalendarApp.EventColor.GREEN, 
    ORANGE: CalendarApp.EventColor.ORANGE, 
    RED	: CalendarApp.EventColor.RED, 
    YELLOW: CalendarApp.EventColor.YELLOW, 
    CYAN: CalendarApp.EventColor.CYAN, 
    MAUVE: CalendarApp.EventColor.MAUVE,
    PALE_BLUE: CalendarApp.EventColor.PALE_BLUE,
    PALE_GREEN: CalendarApp.EventColor.PALE_GREEN,
    PALE_BLUE: CalendarApp.EventColor.PALE_RED,
}; 

let schedule = 
[
  {
    name: 'Đồ họa máy tính - CS105.O21.KHCL - VN',
    startDate: '19/02/24',
    endDate: '08/06/24',
    startTime: '07:30:00',
    endTime: '09:45:00',
    gap: 1,
    description: 'P B1.10 - CS105.O21.KHCL - VN - Sĩ số: 49}',
    color: 11,
    weekday: 4
  },
  {
    name: 'Bảo mật web và ứng dụng - NT213.O22.ATCL.1 - VN(HT1) - (Cách 2 tuần)',
    startDate: '04/03/24',
    endDate: '01/06/24',
    startTime: '07:30:00',
    endTime: '11:30:00',
    gap: 2,
    description: 'P B4.06 (PM) - NT213.O22.ATCL.1 - VN(HT1) - (Cách 2 tuần) - Sĩ số: 23}',
    color: 6,
    weekday: 5
  },
  {
    name: 'Các phương pháp lập trình - SE334.O21.PMCL - VN - (Cách 2 tuần)',
    startDate: '19/02/24',
    endDate: '15/06/24',
    startTime: '07:30:00',
    endTime: '10:45:00',
    gap: 2,
    description: 'P B4.10 - SE334.O21.PMCL - VN - (Cách 2 tuần) - Sĩ số: 50}',
    color: 4,
    weekday: 7
  },
  {
    name: 'Cơ chế hoạt động của mã độc - NT230.O21.ATCL - VN',
    startDate: '19/02/24',
    endDate: '08/06/24',
    startTime: '08:15:00',
    endTime: '09:45:00',
    gap: 1,
    description: 'P C212 (CLC) - NT230.O21.ATCL - VN - Sĩ số: 26}',
    color: 11,
    weekday: 3
  },
  {
    name: 'Bảo mật web và ứng dụng - NT213.O22.ATCL - VN',
    startDate: '19/02/24',
    endDate: '08/06/24',
    startTime: '08:15:00',
    endTime: '09:45:00',
    gap: 1,
    description: 'P C301 (CLC) - NT213.O22.ATCL - VN - Sĩ số: 45}',
    color: 6,
    weekday: 4
  },
  {
    name: 'Cơ chế hoạt động của mã độc - NT230.O21.ATCL.1 - VN(HT1) - (Cách 2 tuần)',
    startDate: '04/03/24',
    endDate: '01/06/24',
    startTime: '13:00:00',
    endTime: '17:00:00',
    gap: 2,
    description: 'P B2.18 (PM) - NT230.O21.ATCL.1 - VN(HT1) - (Cách 2 tuần) - Sĩ số: 26}',
    color: 11,
    weekday: 3
  },
  {
    name: 'Tư duy tính toán - CS117.O21 - VN',
    startDate: '19/02/24',
    endDate: '08/06/24',
    startTime: '13:00:00',
    endTime: '15:15:00',
    gap: 1,
    description: 'P C214 (CLC) - CS117.O21 - VN - Sĩ số: 100}',
    color: 6,
    weekday: 6
  }
]; 

// red green blue orange yellow 
let schedule1 = [
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
        name: "Lý thuyết: Các phương pháp lập trình", 
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

const baomatweb = [
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "07:30:00", 
        endTime: "11:30:00", 
        weekday: 2, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "13:00:00", 
        endTime: "16:15:00", 
        weekday: 4, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "13:00:00", 
        endTime: "16:15:00", 
        weekday: 7, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 
        weekday: 3, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "07:30:00", 
        endTime: "08:15:00", 
        weekday: 6, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "10:00:00", 
        endTime: "11:30:00", 
        weekday: 6, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 
        weekday: 6, 

        gap: 1, 
        description: "", 
        color: COLORS.BLUE, 
    }, 



    // NOTE: Collided
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "07:30:00", 
        endTime: "11:30:00", 
        weekday: 5, 

        gap: 2, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
];

const madoc = [
    {
        name: "Tự học: Cơ chế hoạt động của mã độc", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "13:00:00", 
        endTime: "16:15:00", 
        weekday: 2, 

        gap: 1, 
        description: "", 
        color: COLORS.RED, 
    }, 
    {
        name: "Tự học: Cơ chế hoạt động của mã độc", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "13:00:00", 
        endTime: "16:15:00", 
        weekday: 5, 

        gap: 1, 
        description: "", 
        color: COLORS.RED, 
    }, 
    {
        name: "Tự học: Cơ chế hoạt động của mã độc", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 
        weekday: 7, 

        gap: 1, 
        description: "", 
        color: COLORS.RED, 
    }, 


    // NOTE: collided 
    {
        name: "Tự học: Cơ chế hoạt động của mã độc", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "13:00:00", 
        endTime: "16:15:00", 
        weekday: 3, 

        gap: 2, 
        description: "", 
        color: COLORS.RED, 
    }, 
];

const backendproject = [
    {
        name: "Tự học: Backend Web Project", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 
        weekday: 2, 

        gap: 1, 
        description: "", 
        color: COLORS.CYAN, 
    }, 
    {
        name: "Tự học: Backend Web Project", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 
        weekday: 4, 

        gap: 1, 
        description: "", 
        color: COLORS.CYAN, 
    }, 
    {
        name: "Tự học: Backend Web Project", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 
        weekday: 5, 

        gap: 1, 
        description: "", 
        color: COLORS.CYAN, 
    }, 
    {
        name: "Tự học: Backend Web Project", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "13:00:00", 
        endTime: "16:15:00", 
        weekday: 8, 

        gap: 1, 
        description: "", 
        color: COLORS.CYAN, 
    }, 

    // NOTE: collided 
    {
        name: "Tự học: Backend Web Project", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "07:30:00", 
        endTime: "11:30:00", 
        weekday: 7, 

        gap: 2, 
        description: "", 
        color: COLORS.CYAN, 
    }, 
];

const tuduytinhtoan = [
    {
        name: "Tự học: Tư duy tính toán", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "10:00:00", 
        endTime: "11:30:00", 
        weekday: 4, 
        gap: 1, 
        description: "", 
        color: COLORS.ORANGE, 
    }, 
    {
        name: "Tự học: Tư duy tính toán", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "17:00:00", 
        endTime: "18:30:00", 
        weekday: 3, 
        gap: 1, 
        description: "", 
        color: COLORS.ORANGE, 
    }, 
    {
        name: "Tự học: Tư duy tính toán", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 
        startTime: "17:00:00", 
        endTime: "18:30:00", 
        weekday: 5, 
        gap: 1, 
        description: "", 
        color: COLORS.ORANGE, 
    }, 

    {
        name: "Tự học: Tư duy tính toán", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "08:15:00", // NOTE: the time of this is confusing 
        endTime: "09:30:00", 

        weekday: 8, 
        gap: 1, 
        description: "", 
        color: COLORS.ORANGE, 
    }, 
];

const pplaptrinh = [
    {
        name: "Tự học: Các phương pháp lập trình", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "15/6/2024", 

        startTime: "17:00:00", 
        endTime: "18:30:00", 

        weekday: 6, 
        gap: 1, 
        description: "", 
        color: COLORS.YELLOW, 
    }, 
    {
        name: "Tự học: Các phương pháp lập trình", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "15/6/2024", 

        startTime: "17:00:00", 
        endTime: "18:30:00", 

        weekday: 7, 
        gap: 1, 
        description: "", 
        color: COLORS.YELLOW, 
    }, 

    {
        name: "Tự học: Các phương pháp lập trình", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "15/6/2024", 

        startTime: "07:30:00", 
        endTime: "8:15:00", 

        weekday: 8, 
        gap: 1, 
        description: "", 
        color: COLORS.YELLOW, 
    }, 
    {
        name: "Tự học: Các phương pháp lập trình", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "15/6/2024", 

        startTime: "10:00:00", 
        endTime: "10:45:00", 

        weekday: 8, 
        gap: 1, 
        description: "", 
        color: COLORS.YELLOW, 
    }, 
];

const dohoa = [
    {
        name: "Tự học: Đồ họa máy tính", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "07:30:00", 
        endTime: "08:15:00", 

        weekday: 3, 
        gap: 1, 
        description: "", 
        color: COLORS.GREEN, 
    }, 
    {
        name: "Tự học: Đồ họa máy tính", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "10:00:00", 
        endTime: "11:30:00", 

        weekday: 3, 
        gap: 1, 
        description: "", 
        color: COLORS.GREEN, 
    }, 

    {
        name: "Tự học: Đồ họa máy tính", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "17:00:00", 
        endTime: "18:30:00", 

        weekday: 4, 
        gap: 1, 
        description: "", 
        color: COLORS.GREEN, 
    }, 

    {
        name: "Tự học: Đồ họa máy tính", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "17:00:00", 
        endTime: "18:30:00", 

        weekday: 2, 
        gap: 1, 
        description: "", 
        color: COLORS.GREEN, 
    }, 
];

const machinelearning = [
    {
        name: "Tự học: Machine Learning", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "17:00:00", 
        endTime: "18:30:00", 

        weekday: 8, 
        gap: 1, 
        description: "", 
        color: COLORS.MAUVE, 
    }, 
];

const doanchuyennganh = [
    {
        name: "Tự học: Đồ án chuyên ngành", 
        startDate: "19/2/2024", // NOTE: this is monday
        endDate: "8/6/2024", 

        startTime: "20:00:00", 
        endTime: "00:00:00", 

        weekday: 8, 
        gap: 1, 
        description: "", 
        color: COLORS.GRAY, 
    }, 
];

const tuhoc = [
    ...baomatweb, 
    ...madoc, 
    ...backendproject, 
    ...tuduytinhtoan, 
    ...pplaptrinh, 
    ...dohoa, 
    ...machinelearning, 
    ...doanchuyennganh, 
]

schedule = [...schedule, ...tuhoc];


// Input: event1, event2 
// Output: modified event with adjusted date with no overlap 
function avoidCollisionOfRecurrences(eventSrc, eventDest) {
    // NOTE: (adjusted) eventSrc is the can't modified event (Lich truong)
    //       (adjusted) eventDest is the can modified event (Lich tu hoc)

    /*

    modified event src: 
    {
        name: "Thực hành: Bảo mật web và ứng dụng", 
        startDate: "7/3/2024", 
        endDate: "1/6/2024", 
        startTime: "07:30:00", 
        endTime: "11:30:00", 
        weekday: 5, 
        gap: 2, 
        description: "P B4.06 (PM) - NT213.O22.ATCL.1 - VN(HT1)", 
        color: COLORS.BLUE, 
    }, 

    modified event dest: 
    {
        name: "Tự học: Bảo mật web và ứng dụng", 
        startDate: "22/2024", 
        endDate: "8/6/2024", 

        startTime: "07:30:00", 
        endTime: "11:30:00", 
        weekday: 5, 

        gap: 2, 
        description: "", 
        color: COLORS.BLUE, 
    }, 
     * */

    // NOTE: should only start offsetting when actual collision occur 
    // -> simulation, can't use any other way, maybe :v  
    // -> start mapping all the recurrent of each event
    // -> then offset the dest where needed 
    
    // 2 cases: 
    // 1. one date is larger from the other -> separate the event into 2 different events: before collision, after collision
    // 2. both are the same -> return the modified dest event 

    // TODO: 
    let result; 

    return result;
}

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

// TODO: clean this function, overlapping variables and very confusing 
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

    if(endtime === "00:00:00") {
        //Logger.log("12 gio rui :v");
        currentend.setDate(currentend.getDate() + 1);
    }

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

    //Logger.log(validEvent);

    const weekdays = [weekdaysMapping[validEvent.weekday]];

    const eventSeries = calendar.createEventSeries(name,
        currentstart, 
        currentend,
        CalendarApp.newRecurrence().addWeeklyRule().interval(gap)
            .onlyOnWeekdays(weekdays)
            .until(enddate))
        .setDescription(validEvent.description)
        .setColor(validEvent.color)
        ;

    Logger.log("Added: " + name);
}

const calendarID = "eba21ac96c3a8a9946fb32039c424c6a0398b23379ae0afddfdd47fae1bed945@group.calendar.google.com"; 

function calendarAutomation() {
    const calendar = CalendarApp.getCalendarById(calendarID);
    const correctedSchedule = modifiedSchedule(schedule);

    Logger.log(COLORS);

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

