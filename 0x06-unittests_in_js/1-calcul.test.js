const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return sum of integers when the type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, -1), 0);
    assert.strictEqual(calculateNumber('SUM', 1, -3), -2);
  });
  it('should round and return the sum of numbers when the numbers are floats and the type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should return the subtraction of integers when the type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -1), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4);
  });
  it('should round and return the subtraction if the numbers are floats and the type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('should return the division of integers when the type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', 1, -1), -1);
    assert.strictEqual(calculateNumber('DIVIDE', 1, -3), -0.3333333333333333);
  });
  it('should round and return the division if the numbers are floats and the type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
  });
  it('should throw an error if the second number is 0 and the type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'ERROR');
  });
  it('should throw an error if the arguments are not numbers', () => {
    assert.throws(() => calculateNumber('DIVIDE', 'hello', 'world'), {
      name: 'TypeError',
      message: 'Parameters must be numbers',
    });
  });
});