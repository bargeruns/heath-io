const app = require('../app.js');
const request = require('supertest');
const should = require('chai').should();

  it('should listen and respond to requests at root', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        done();
      });
  });
