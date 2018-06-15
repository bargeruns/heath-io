const app = require('../../app.js');
const request = require('supertest');
const should = require('chai').should();
describe('market routes', () => {
  it('should return list of markets from bittrex', done => {
    request(app)
      .get('/markets')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
    });

    it('should return 24-hour summary of a given market', done => {
      request(app)
        .get('/markets/summary?market=BTC-ETH')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
    it('should return 24-hour summary of a given market', done => {
      request(app)
        .get('/markets/summary?market=BTC-DOGE')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
    it('should return 24-hour summary of a given market', done => {
      request(app)
        .get('/markets/summary?market=BTC-LTC')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
    it('should return an error for summary request of invalid market', done => {
      request(app)
        .get('/markets/summary?market=SEAN-COINS')
        .expect(400)
        .end((err, res) => {
          done();
        });
    });

  });
  
  describe('bittrex tickers', () => {
    it('should return ticker for a given market', done => {
      request(app)
        .get('/markets/ticker?market=BTC-ETH')
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);
          done();
        });
    });

    it('should return error when fetching ticker for an invalid market', done => {
      request(app)
        .get('/markets/ticker?market=SMB-COINAGE')
        .expect(400)
        .end((err, res) => {
          should.exist(err);
          done();
        });
    })
  });
