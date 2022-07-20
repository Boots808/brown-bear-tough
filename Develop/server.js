//code link to express
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//code routes for project - double check correct
const api = require('./routes/api/apiRoutes');
const html = require('./routes/html/index');

//POST data - updated - no errors

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//use routes - UNSURE IF CORRECT Links - removed errors
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listen function
app.listen(PORT, () => {
    console.log(`API Server on port ${PORT}!`);
});


//resource: YT Video on Note Taker App: https://www.youtube.com/watch?v=BSVWmsGU4Dc
//resource: Listen Function resource: https://www.geeksforgeeks.org/express-js-app-listen-function/#:~:text=The%20app.,Server.
//resource: module 11 - zookeepr coursework
//resource for unique id: https://www.npmjs.com/package/generate-unique-id
 //resource for app use/app get: https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js