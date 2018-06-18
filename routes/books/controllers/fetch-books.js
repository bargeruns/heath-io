const axios = require('axios');

function fetchBittrexBooks(market) {
  return axios.get(`https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-${market}&type=both`)
    .then(response => {
      if (!response.data.success) {
        return new Error(`Error retrieving ${market} order book from Bittrex: ${response.data.message}`);
      }
      return {
        bids: response.data.result.buy,
        asks: response.data.result.sell
      };
    })
    .catch(err => new Error(err));
}

function fetchPoloniexBooks(market) {
   return axios.get(`https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_${market}&depth=10`)
    .then(response => {
      if (!response.data) {
        return new Error(`Error retrieving ${market} order book from Poloniex.`);
      }
      return response.data;
    })
    .catch(err => new Error(err));
}

module.exports = {
  combined(req, res) {
    const { market } = req.query;
    console.info(`Generating combined order book for ${market}`)
    Promise.all([fetchBittrexBooks(market), fetchPoloniexBooks(market)])
      .then(results => {
        const combinedBook = {
          bittrex: results[0],
          poloniex: results[1]
        };
        return res.status(200).send(combinedBook);
      })
      .catch(err => res.status(500).send(err));
    }
} 
