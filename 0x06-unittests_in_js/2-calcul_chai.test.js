const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    });
  });

  describe('SUM first round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 2.4, 4)).to.equal(6);
    });
  });

  describe('SUM second round ', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 4, 2.4)).to.equal(6);
    });
  });

  describe('SUM both round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT no Round', function () {
    it('should return -3', function () {
      chai.expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -2', function () {
      chai.expect(calculateNumber('SUBTRACT', 2.4, 4)).to.equal(-2);
    });
  });

  describe('SUBTRACT second round ', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('SUBTRACT', 4, 2.4)).to.equal(2);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -2', function () {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-2);
    });
  });

  describe('DIVIDE no Round', function () {
    it('should return 0.25', function () {
      chai.expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 0.5', function () {
      chai.expect(calculateNumber('DIVIDE', 2.4, 4)).to.equal(0.5);
    });
  });

  describe('DIVIDE second round ', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 4, 2.4)).to.equal(2);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.5', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.5);
    });
  });
});