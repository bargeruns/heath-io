const app = require('../app.js').app;
const request = require('supertest');

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
