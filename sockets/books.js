const axios = require('axios');

module.exports = {
  fetchOrderBook(socket, market) {
    axios.get(`http://localhost:3000/books?market=${market}`)
      .then(response => {
        socket.emit('order book updated', { data: response.data });
      })
      .catch(error => {
        socket.emit('error', { error: error });
      });
  }
}