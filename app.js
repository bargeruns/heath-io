const app = require('express')();
const path = require('path');
const httpServer = require('http').Server(app);

const io = require('socket.io')(httpServer, {
  path: '/api',
  serveClient: false
});

app.use('/markets', require('./routes/markets'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/src/index.html'));
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on *${process.env.PORT || 3000}.`);
});

io.on('connection', function (socket) {
  socket.emit('connected', { message: 'client connected' });
});

module.exports = app;



