const axios = require('axios');

module.exports = function fetchMarketTicker(req, res, next) {
  const { market } = req.query;
  axios.get(`https://bittrex.com/api/v1.1/public/getticker?market=${market}`)
    .then(response => {
      if (!response.data.success) {
        const msg = `Error fetching current ticker for market ${market}: ${response.data.message}`;
        console.log(msg);
        return res.status(400).send({message: msg});
      }
      return res.status(200).send(response.data.result);
    })
    .catch(err => {
      return res.send(err);
    });
}
