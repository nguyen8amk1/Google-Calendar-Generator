/*
 * TODO: 
    + Student's TKB html Parser  (4h) [] 
        Input: tkb html file  
        Output: schedule events array  

    + Wrap things into a class
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

        const mamon = $(td).children("strong");
        
        let name = "";
        let startDate = "";
        let endDate = "";
        let startTime = "";
        let endTime = "";
        let weekday = "";
        let gap = "";
        let description = "";
        let color; 

        let good = 0;
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

                // NOTE: tiet starting from 0, to exclusive n, meaning -1 from the real tiet 
                const tietStartTimeMapping = ["07:30:00", "08:15:00", "09:00:00", "10:00:00", "10:45:00", "13:00:00", "13:45:00", "14:30:00", "15:30:00", "16:15:00"]; 
                const tietEndMapping =       ["08:15:00", "09:00:00", "09:45:00", "10:45:00", "11:30:00", "13:45:00", "14:30:00", "15:15:00", "16:15:00", "17:00:00" ]; 

                startTime = tietStartTimeMapping[ystart]; // 
                endTime = tietEndMapping[yend-1]; // 

                const extractGapFromMaMon = (inputString) => {
                  const regex = /\(Cách (\d+) tuần\)/;
                  const match = inputString.match(regex);

                  if (match && match[1]) {
                    return parseInt(match[1], 10);
                  } else {
                    return 1;
                  }
                }

                gap = extractGapFromMaMon(mamon.text());
                description = `${parsedSubjectInfo[3]} - ${mamon.text()} - ${parsedSubjectInfo[1]}}`; // phong hoc 3 + si so 1

                color = 11; //TODO: handle color mapping @Current 

                good = 1; 
            }

        }


        newArray.push({
            // NOTE: these 3 information are for booleanTable calculation 
            good: good, 

            ystart: ystart, 
            yend: yend, 

            // NOTE: the information from now on is not related to the upper one 
            name: name,
            startDate: startDate,
            endDate: endDate,

            startTime: startTime,
            endTime: endTime,

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
                subject.weekday = x + 1;
                fillFromTo(booleanTable, x-1, subject.ystart, subject.yend);
            }
            
        }
    }
}

fillBooleanTableAccordingToTKB();

const finalResults = [];
for(let i = 0; i < tkb.length; i++) {
    for(let j = 0; j < tkb[i].length; j++) {
        if(tkb[i][j].good) { 
            delete tkb[i][j].good; 
            delete tkb[i][j].ystart; 
            delete tkb[i][j].yend; 
            finalResults.push(tkb[i][j]); 
        } 
    }
}

console.log(finalResults);

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
