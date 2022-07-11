const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');
//UUID? 

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