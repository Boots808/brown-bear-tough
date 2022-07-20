const path = require('path');
// const router = require('express').Router();

//return the notes.html file
module.exports = (app) => {
    app.get('notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/notes.html'));
    });

    //return HTML file for visual
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    })

};

// //module ex. need to update - additional of the below? module has multiple
// router.get('/', (req, res) => {
//     res.sendFile(path.join(_dirname, 'NEED'));

// });

// module.exports = router;