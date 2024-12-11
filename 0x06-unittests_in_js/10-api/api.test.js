const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return correct status code and message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('should return Welcome message with username', (done) => {
    const userName = 'Betty';
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName }
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      }
    );
  });
});
