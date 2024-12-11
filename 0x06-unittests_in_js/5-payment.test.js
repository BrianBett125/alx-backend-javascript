const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when totalAmount is 100 and totalShipping is 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when totalAmount is 10 and totalShipping is 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
