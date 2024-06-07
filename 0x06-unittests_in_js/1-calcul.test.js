const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return sum of integers when the type is SUM', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
    assert.strictEqual(calculateNumber(1, -1, 'SUM'), 0);
    assert.strictEqual(calculateNumber(1, -3, 'SUM'), -2);
  });
  it('suhoud reound and return the sum of number when the numbs are floats and the type is SUM', () => {
    assert.strictEqual(calculateNumber(1, 3.7, 'SUM'), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7, 'SUM'), 5);
  });
  it('shoud return the subtraction of integers when the type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUBTRACT'), -2);
    assert.strictEqual(calculateNumber(1, -1, 'SUBTRACT'), 2);
    assert.strictEqual(calculateNumber(1, -3, 'SUBTRACT'), 4);
  });
  it('should round and reutn the substruaction if the numbers are floats and the type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber(1, 3.7, 'SUBTRACT'), -3);
    assert.strictEqual(calculateNumber(1.2, 3.7, 'SUBTRACT'), -3);
  });
  it('should return the division of integers when the type is DIVIDE', () => {
    assert.strictEqual(calculateNumber(1, 3, 'DIVIDE'), 0.3333333333333333);
    assert.strictEqual(calculateNumber(1, -1, 'DIVIDE'), -1);
    assert.strictEqual(calculateNumber(1, -3, 'DIVIDE'), -0.3333333333333333);
  });
  it('should round and return the division if the numbers are floats and the type is DIVIDE', () => {
    assert.strictEqual(calculateNumber(1, 3.7, 'DIVIDE'), 0.25);
    assert.strictEqual(calculateNumber(1.2, 3.7, 'DIVIDE'), 0.25);
  });
  it('it shoud throw an error if the second number is 0 and the type is DIVIDE'), () => {
    assert.throws(() => calculateNumber(1, 0, 'DIVIDE'), {
      name: 'Error',
      message: 'Cannot divide by 0',
    });
  it('it should throw and error if the arguments are not numbers', () => {
    assert.throws(() => calculateNumber('hello', 'world', 'DIVIDE'), {
      name: 'TypeError',
      message: 'Parameters must be numbers',
    });
  });
}
});
