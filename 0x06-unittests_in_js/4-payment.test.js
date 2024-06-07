const mocha = require('mocha');
const { expect, assert } = require('chai');
const sinon = require('sinon');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const calcNumStub = sinon.stub(utils, 'calculateNumber');
    calcNumStub.returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calcNumStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.equal(true);

    calcNumStub.restore();
    consoleSpy.restore();
  });
});