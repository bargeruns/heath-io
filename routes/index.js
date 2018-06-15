const path = require('path');
const router = require('express')();

router.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../client/src/index.html'));
});

module.exports = router;
