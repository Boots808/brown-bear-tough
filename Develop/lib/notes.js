// need to add more functionality for form functions
const fs = require('fs');
const path = require('path');

const createNewNote = (body, notes) {
    const note = body;
    notes.push(note);

    fs.writeFileSync(
        path.join(_dirname, '../db/db.json'),
        JSON.stringify({notes}, null,2)
    )
};

module.exports = { createNewNote };