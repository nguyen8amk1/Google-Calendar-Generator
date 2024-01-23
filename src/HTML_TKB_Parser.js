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

const selectorTKBTable = '#uit-tracuu-tkb-data > div > table.sticky-enabled.tableheader-processed.sticky-table';

const htmlWeekdays = $(`${selectorTKBTable} > thead th`);
//console.log(htmlWeekdays);

const weekdaysMapping = getWeekdaysMapping(htmlWeekdays);
console.log(weekdaysMapping);

// TODO: extract all the subjects
// input: 
// output: a map, key = weekday 
//
// TODO: print all the "rowspan_data" of a tr with it's index @Current 

const allTrs = $(`${selectorTKBTable} > tbody tr`);
//console.log(allTrs[0]);

const booleanTable = Array.from({ length: 12 }, () => Array(6).fill(1));
//console.log(booleanTable);

function fillFromTo(booleanTable, i, from, to) {
    for(let j = from; j < to; j++) {
        booleanTable[j][i] = 0; 
    }
}

const tkb = [];
allTrs.each((index, element) => {
    const alltds = $(`${selectorTKBTable} > tbody > tr:nth-child(${index + 1}) > td`);
    const newArray = [];
    tkb.push(newArray);
    alltds.each((tdindex, td) => {
        const ystart = index;
        const yend = ystart + parseInt($(td).attr("rowspan"));
        newArray.push({
            good: $(td).hasClass('rowspan_data') ? 1 : 0, 
            ystart: ystart, 
            yend: yend, 
            name: $(td).text().trim(), 
        });
    });
    //console.log();
});

//console.log(booleanTable);
//console.log(tkb);

const fillBooleanTableAccordingToTKB = () => {
    for(let i = 0; i < booleanTable.length; i++) {
        let x = 0; 
        for(let j = 0; j < booleanTable[i].length; j++) {
            x += booleanTable[i][j]; 
            const subject = tkb[i][x];

            if(subject && subject.good) {
                subject.x = x;
                fillFromTo(booleanTable, x-1, subject.ystart, subject.yend);
            }
            
        }
    }
}

fillBooleanTableAccordingToTKB();
console.log(booleanTable, tkb);

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
