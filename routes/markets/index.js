const path = require('path');
const router = require('express').Router();

router.get('/', require('./fetch-markets'));
router.get('/summary', require('./fetch-market-summary'));
router.get('/ticker', require('./fetch-market-ticker'));

module.exports = router;
