const path = require('path');
const router = require('express').Router();

//module ex. need to update - additional of the below? module has multiple
router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'NEED'));

});

module.exports = router;