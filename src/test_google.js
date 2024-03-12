const { google } = require('googleapis');
const dayjs = require('dayjs')

require('dotenv').config();

// NOTE: these are for testing purposes only 
const YOUR_CLIENT_ID='39117228837-iktth2scgqkeojkeg5tbemcu2o9ab9fq.apps.googleusercontent.com';
const YOUR_CLIENT_SECRET='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';
const YOUR_REDIRECT_URL='http://localhost:5000/authen';
const YOUR_API_KEY = 'AIzaSyCh6uWHq_ISH1bbMgvIbuHsetWx6xhmDFo';

// console.log(
//     process.env.YOUR_CLIENT_ID,
//     process.env.YOUR_CLIENT_SECRET,
//     process.env.YOUR_REDIRECT_URL);

const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REDIRECT_URL
);

// generate a url that asks Google Calendar scopes
const scopes = [
    'https://www.googleapis.com/auth/calendar'
];

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        // If you only need one scope you can pass it as a string
        scope: scopes
    });

    console.log(url);
    res.redirect(url);
})

const testapi = async () => {
    const calendar = google.calendar({version: 'v3', auth: oauth2Client});
    //console.log(calendar);
    //
    
    const event = {
        summary: 'Google I/O 2015',
        description: 'Testing',
        start: {
            dateTime: dayjs(new Date()),
            timeZone: 'Asia/Ho_Chi_Minh',
        },
        end: {
            dateTime: dayjs(new Date()),
            timeZone: 'Asia/Ho_Chi_Minh',
        },
    };

    calendar.events.insert({
        auth: oauth2Client,
        calendarId: 'primary',
        resource: event,

    }, function(err, event) {
        if (err) {
            console.log('There was an error contacting the Calendar service: ' + err);
            return;
        }
        console.log('Event created: %s', event);
    });
}



app.get('/authen', async (req, res) => {
    const authorizationCode = req.query.code; // the authorization grant  

    const {tokens} = await oauth2Client.getToken(authorizationCode);
    console.log(tokens);
    oauth2Client.setCredentials(tokens);

    oauth2Client.on('tokens', (tokens) => {
      if (tokens.refresh_token) {
        // store the refresh_token in my database!
        console.log(tokens.refresh_token);
      }
      console.log(tokens.access_token);
    });

    console.log("test api");

    testapi().catch(console.error);

    res.send("ditmesaigon");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

