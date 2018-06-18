const request = require('supertest');

const app = require('../../app.js').app;

describe('book endpoints', () => {
  it('should retrieve books from bittrex and poloniex exchanges if no additional exchanges provided', done => {
    request(app)
      .get('/books?market=LTC')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        const results = JSON.parse(res.text);
        expect(results.bittrex.bids).toBeTruthy;
        expect(results.bittrex.asks).toBeTruthy;
        expect(results.poloniex.bids).toBeTruthy;
        expect(results.poloniex.asks).toBeTruthy;
        done();
      });
  });
});