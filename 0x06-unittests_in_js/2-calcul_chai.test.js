const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return sum of integers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, -1)).to.equal(0);
      expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
    });
    it('should round and return the sum of numbers when the numbers are floats', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT no Round', function () {
    it('should return the subtraction of integers', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1, -1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
    });
    it('should round and return the subtraction if the numbers are floats', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE no Round', function () {
    it('should return the division of integers', function () {
      expect(calculateNumber('DIVIDE', 1, 3)).to.be.closeTo(0.3333333333333333, 0.01);
      expect(calculateNumber('DIVIDE', 1, -1)).to.equal(-1);
      expect(calculateNumber('DIVIDE', 1, -3)).to.be.closeTo(-0.3333333333333333, 0.01);
    });
    it('should round and return the division if the numbers are floats', function () {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });
    it('should throw an error if the second number is 0', function () {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('ERROR');
    });
  });

  describe('error handling', function () {
    it('should throw an error if the arguments are not numbers', function () {
      expect(() => calculateNumber('DIVIDE', 'hello', 'world')).to.throw(TypeError, 'Parameters must be numbers');
    });
  });
});