const path = require('path');
const express = require('express');

//return the notes.html file
module.exports = (app) => {
    app.get('/Develop/public/notes.html', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/notes.html'));
    });

    //return HTML file for visual
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    })

};



// module.exports = router;