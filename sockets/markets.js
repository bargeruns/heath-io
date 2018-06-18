const axios = require('axios');

module.exports = {
  fetchMarkets(socket) {
    axios.get('http://localhost:3000/markets')
      .then(response => {
        socket.emit('market list updated', { data: response.data });
      })
      .catch(error => {
        socket.emit('error', { error: error });
      });
  },

  fetchMarketSummary(socket, market) {
    axios.get(`http://localhost:3000/markets/summary?market=${market}`)
      .then(response => {
        socket.emit('market summary', { data: response.data });
      })
      .catch(error => {
        socket.emit('error', { error });
      });
  },

  fetchMarketTicker(socket, market) {
    axios.get(`http://localhost:3000/markets/ticker?market=${market}`)
      .then(response => {
        socket.emit('market ticker', { data: response.data });
      })
      .catch(error => {
        socket.emit('error', { error });
      });
  }
}