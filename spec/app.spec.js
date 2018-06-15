const app = require('../app.js');
const request = require('supertest');
const io     = require('socket.io-client');

describe('express app', () => {
  it('should serve client app at /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
});
