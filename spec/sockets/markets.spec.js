const app = require('../../app').httpServer;
const io       = require('socket.io-client')('http://localhost:3000');
const request  = require('supertest');

describe('market event handlers', () => {

  it('should return market list when client emits fetch markets message', done => {
    request(app);

    io.emit('fetch markets');
    io.on('market list updated', socket => {
      expect(socket.data).toBeTruthy;
      done();
    })
  });

  it('should return summary for given market when client emits fetch market summary event', done => {
    request(app);

    io.emit('fetch market summary', 'BTC-ETH');
    io.on('market summary', socket => {
      expect(socket.data).toBeTruthy;
      done();
    });
  });

  it('should return ticker for given market when client emits fetch market ticker event', done => {
    request(app);

    io.emit('fetch market ticker', 'btc-ltc');
    io.on('market ticker', socket => {
      expect(socket.data).toBeTruthy;
      done();
    });
  });
});