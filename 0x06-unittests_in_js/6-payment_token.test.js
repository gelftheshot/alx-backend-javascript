const mocha = require('mocha');
const { expect, assert } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the object { data: "Successful response from the API" } when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});