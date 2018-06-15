const axios = require('axios');

module.exports = function fetchMarketSummary(req, res, next) {
  const { market } = req.query;
  console.info(`Looking up market summary for market: ${market.toLowerCase()}`);

  axios.get(`https://bittrex.com/api/v1.1/public/getmarketsummary?market=${market.toLowerCase()}`)
    .then(response => {
      if (!response.data.success) {
        const msg = `Error fetching summary for market ${market}: ${response.data.message}`;
        console.error(msg);
        return res.status(400).send(new Error(msg));
      }
      return res.status(response.status).json(response.data.result);
    })
    .catch(err => {
      return res.status(err.status).send(err);
    });
}
