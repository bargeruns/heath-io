const request = require('supertest');
const io      = require('socket.io-client');
const app     = require('../../app');

describe('api routes', () => {
  it('should provide a socket connection when request is made to /api/', done => {
    request(app);
    const socket = io('http://localhost:3000', {
      path: '/api'
    });
  
    socket.on('connected', (event) => {
      expect(event.message).toEqual('client connected');
      done(); 
    });
  });
});
