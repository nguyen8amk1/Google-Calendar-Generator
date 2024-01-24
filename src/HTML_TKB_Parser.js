/*
 * TODO: 
    + Student's TKB html Parser  (4h) [] 
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
const allTrs = $(`${selectorTKBTable} > tbody tr`);
//console.log(allTrs[0]);

const booleanTable = Array.from({ length: 12 }, () => Array(6).fill(1));
//console.log(booleanTable);

function fillFromTo(booleanTable, i, from, to) {
    for(let j = from; j < to; j++) {
        booleanTable[j][i] = 0; 
    }
}

function parseSubjectInformationFromHTML(htmlString) {
    const textArray = htmlString.split('<br>');
    const cleanedTextArray = textArray.map(item => item.trim());
    const finalTextArray = cleanedTextArray.filter(item => item !== '')
    return finalTextArray;
}

const tkb = [];
allTrs.each((index, element) => {
    const alltds = $(`${selectorTKBTable} > tbody > tr:nth-child(${index + 1}) > td`);
    const newArray = [];
    tkb.push(newArray);
    alltds.each((tdindex, td) => {
        const ystart = index;
        const yend = ystart + parseInt($(td).attr("rowspan"));

        // TODO: extract all needed fields @Current
        // $(td).text().trim()
        //console.log($(td).html());
        const mamon = $(td).children("strong");
        //const siso = brList[];
        
        let name = "";
        let startDate = "";
        let endDate = "";
        let startTime = "";
        let endTime = "";
        let weekday = "";
        let gap = "";
        let description = "";
        let color; 

        if(mamon.length > 0)  {

            const htmlString = $(td).html();
            const parsedSubjectInfo = parseSubjectInformationFromHTML(htmlString); 
            
            if(parsedSubjectInfo.length == 6) {
                //console.log(parsedSubjectInfo);
                //console.log(mamon.text());
                
                name = `${parsedSubjectInfo[2]} - ${mamon.text()}`; // ten + mamon
                
                const dateExtractFromString = (inputString) => {
                    const colonIndex = inputString.indexOf(':');
                    const dateInformation = inputString.slice(colonIndex + 1);
                    return dateInformation;
                }

                startDate = dateExtractFromString(parsedSubjectInfo[4]);
                endDate = dateExtractFromString(parsedSubjectInfo[5]);

                // TODO: these 3 will be obtained using other ways 
                startTime = `` // 
                endTime = ``; // 
                weekday = ``; // 

                gap = 1; // TODO: need to find a way to get the gap as well 
                description = `${parsedSubjectInfo[3]} - ${parsedSubjectInfo[1]}}`; // phong hoc 3 + si so 1
                color = 11; //NOTE: for now it's fixed to 11 
            }

        }


        newArray.push({
            // NOTE: these 3 information are for booleanTable calculation 
            good: $(td).hasClass('rowspan_data') ? 1 : 0, 
            ystart: ystart, 
            yend: yend, 

            // NOTE: the information from now on is not related to the upper one 
            name: name,
            startDate: startDate,
            endDate: endDate,

            startTime: startTime,
            endTime: endTime,
            weekday: weekday,

            gap: gap,
            description: description,
            color: color,
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
//console.log(booleanTable);
console.log(tkb);

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
