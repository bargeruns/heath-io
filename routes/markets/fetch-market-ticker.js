const axios = require('axios');

module.exports = function fetchMarketTicker(req, res, next) {
  axios.get(`https://bittrex.com/api/v1.1/public/getticker?market=${req.query.market}`)
    .then(response => {
      if (!response.data.success) {
        const msg = `Error fetching current ticker for market ${market}: ${response.data.message}`;
        console.error(msg);
        return res.status(400).send(new Error(msg));
      }
      return res.status(200).json(response.data.result);
    })
    .catch(err => {
      return res.send(err);
    });
}
