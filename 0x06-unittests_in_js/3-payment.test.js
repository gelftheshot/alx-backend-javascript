const mocha = require('mocha');
const { expect, assert } = require('chai');
const sinon = require('sinon');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const calcNumSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calcNumSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);

    calcNumSpy.restore();
    consoleSpy.restore();
  });
});