/*
 * TODO: 
    + Student's TKB html Parser  (4h) [] @Current
        Input: tkb html file  
        Output: schedule events array  
*/


const fs = require('fs');
const cheerio = require('cheerio');

const tkbhtmlPath = "tkb.html";

const html = fs.readFileSync(tkbhtmlPath, 'utf-8');
const $ = cheerio.load(html);

let resultTKB = [];

function getWeekdaysMapping(htmlWeekdays) {
    const mapping = []; 
    htmlWeekdays.each((index, element) => {
        mapping.push($(element).text().trim());
    })

    return mapping;
}

const htmlWeekdays = $('#uit-tracuu-tkb-data > div > table.sticky-enabled.tableheader-processed.sticky-table > thead th');

//console.log(htmlWeekdays);

const weekdays = getWeekdaysMapping(htmlWeekdays);
console.log(weekdays);

// TODO: extract first test subject @Current
const htmlSubjectsTable = $('#uit-tracuu-tkb-data > div > table.sticky-enabled.tableheader-processed.sticky-table > tbody').html();
//console.log(htmlSubjectsTable);



/* const testSubject = { */
/*     name: , */
/*     startDate: , */
/*     endDate: , */
/**/
/*     startTime: , */
/*     endTime: , */
/**/
/*     weekday: , */
/*     gap: , */
/**/
/*     description: ,  */
/**/
/*     color: 0,  */
/* }; */





/*
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
*/
