import calculateNumber from './0-calcul.js';
import assert from 'assert';
import { describe, it } from 'mocha';


describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return -3 when inputs are -1 and -2', function() {
    assert.strictEqual(calculateNumber(-1, -2), -3);
  });

  it('should return -5 when inputs are -1.5 and -3.7', function() {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should return 0 when inputs are 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 0 when inputs are 0.1 and 0.3', function() {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return 1 when inputs are 0.1 and 0.6', function() {
    assert.strictEqual(calculateNumber(0.1, 0.6), 1);
  });

  it('should return 1 when inputs are 0.9 and 0', function() {
    assert.strictEqual(calculateNumber(0.9, 0), 1);
  });

  it('should return 0 when inputs are 0.499 and 0.1', function() {
    assert.strictEqual(calculateNumber(0.499, 0.1), 0);
  });
});