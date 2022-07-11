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

module.exports = router;