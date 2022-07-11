//code link to express
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//code routes for project - double check correct
const api = require('./proj-routes/api');
const html = require('./proj-routes/html');

//POST data

app.use(express.urlencoded){ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//use routes - UNSURE IF CORRECT
app.use('./proj-routes/html);
app.use('./proj-routes/api');


//listen function
app.listen(PORT, () => {
    console.log('API Server on port ${PORT}!');
});


//resource: YT Video on Note Taker App: https://www.youtube.com/watch?v=BSVWmsGU4Dc
//resource: Listen Function resource: https://www.geeksforgeeks.org/express-js-app-listen-function/#:~:text=The%20app.,Server.
 