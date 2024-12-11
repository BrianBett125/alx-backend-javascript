const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with successful response when success is true', (done) => {
  getPaymentTokenFromAPI(true)
    .then((response) => {
      expect(response).to.deep.equal({data: 'Successful response from the API' });
      done();
    });
  });
});
