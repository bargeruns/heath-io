const axios = require('axios');

module.exports = function fetchMarkets(req, res) {
    console.info('fetching available markets');
    return axios.get('https://bittrex.com/api/v1.1/public/getmarkets')
      .then(response => {
        return res.status(response.status).json(response.data.result);
      })
      .catch(err => {
        return res.status(err.status).send({ message: `Error fetching markets from Bittrex: ${err}`});
      });
  }
