const app = require('express')();
const path = require('path');
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

const { fetchMarkets, fetchMarketSummary, fetchMarketTicker } = require('./sockets/markets');
const { fetchOrderBook } = require('./sockets/books');

app.use('/markets', require('./routes/markets'));
app.use('/books', require('./routes/books'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on *${process.env.PORT || 3000}.`);
});

io.on('connection', (socket) => {
  console.log('client connected');
  socket.emit('connected', { message: 'client connected' });
  socket.on('fetch markets', () => fetchMarkets(socket));
  socket.on('fetch market summary', market => fetchMarketSummary(socket, market));
  socket.on('fetch market ticker', market => fetchMarketTicker(socket, market));
  socket.on('fetch order book', market => fetchOrderBook(socket, market));
});


module.exports = {
  app,
  io,
  httpServer
};



