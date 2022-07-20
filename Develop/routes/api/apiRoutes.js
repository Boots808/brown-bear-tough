//const router = require('express').Router();
const fs = require('fs');
const path = require('path');
//will allow for unique id creation
const generateUniqueId = require('generate-unique-id');


//route and notes + json file linking and return as JSON
module.exports = (app) => {
    app.get('../../public/notes.html', (req, res) => {
        res.sendFile(path.join(__dirname, '../../db/db.json'));
        db = JSON.parse(db);
        res.json(db);
      //add note   
    let addedNote = {
        title: req.body.title,
        text: req.body.text,
       //should create a unique id for each note
        id: generateUniqueId()
    };
//pushing note to listed json file
    db.push(addedNote);
    fs.writeFileSync('../../db/db.json', JSON.stringify(db));
    res.json(db);
     
    });

    //Add delete function here





}













router.get('NEED', (req, res) => {
    let results = NEED;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

//below, correct and or needed? Module ex.
router.get('NEED/:id', (req, res) => {
const result = findByID(req.params.id, NEED);
if (result) {
    res.json(result);
} else {
    res.send(404);
}
});

module.exports = router;