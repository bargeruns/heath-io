const router = require('express').Router();

router.get('/', require('./controllers/fetch-books').combined);

module.exports = router;