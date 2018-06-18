const app = require('../../app').httpServer;
const io       = require('socket.io-client')('http://localhost:3000');
const request  = require('supertest');

describe('book events', () => {
  it('should request combined order book on fetch order book event', done => {
    request(app);

    io.emit('fetch order book', 'eth');
    io.on('order book updated', (response) => {
      expect(response.data).toBeTruthy;
      done();
    });
  });
});