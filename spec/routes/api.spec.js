const request = require('supertest');
const io      = require('socket.io-client');
const app     = require('../../app').httpServer;
const ioServer   = require('../../app').io;

describe('api routes', () => {
  it('should provide a socket connection to the client', done => {
    request(app);
    const apiSocket = io('http://localhost:3000');
    apiSocket.on('connected', (socket) => {
      done();
    });
   });
});
