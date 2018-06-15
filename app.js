const express = require('express');
const app = express();

app.use('/markets', require('./routes/markets'));
app.get('/', (req, res) => res.send('cannot GET /'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on *${process.env.PORT || 3000}.`);
});

module.exports = app;



