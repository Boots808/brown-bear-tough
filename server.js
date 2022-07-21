//express, port, and dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//routing to route files
require('./routes/api/apiRoutes');
require('./routes/html/index');

//POST data - updated - no errors

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//use routes - UNSURE IF CORRECT Links - removed errors
require('./routes/html/htmlRoute.js')(app);
require('./routes/api/apiRoutes.js')(app);


//listen function for server
app.listen(PORT, () => {
    console.log(`API Server on port ${PORT}!`);
});


