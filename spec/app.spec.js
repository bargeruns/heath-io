const app = require('../app.js');
const request = require('supertest');

describe('main express application', () => {
  it ('should listen and respond to requests at root', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if(err) {
          throw err;
        }
        done();
      });
  });

  it('should return client app entry on request to /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        done();
      });
  })
});
