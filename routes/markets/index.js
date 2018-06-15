const router = require('express').Router();

router.get('/', require('./controllers/fetch-markets'));
router.get('/summary', require('./controllers/fetch-market-summary'));
router.get('/ticker', require('./controllers/fetch-market-ticker'));

module.exports = router;
