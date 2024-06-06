const calculateNumber = require('./0-calcul.js')
const assert = require('assert');

try{
  assert.strictEqual(calculateNumber(1, 3), 4);
  console.log('Test passed');
}catch(error){
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(1, 3.7), 5);
  console.log('Test passed');
}catch(error){
  console.log('Test failed');
}


try{
  assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  console.log('Test passed');
}catch{
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(-1, -2), -3);
  console.log('Test passed');
}catch(error){
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  console.log('Test passed');
}catch(error){
  console.log('Test failed');
}


try{
  assert.strictEqual(calculateNumber(0, 0), 0);
}catch(error){
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(0.1, 0.3), 0);
}catch(error){
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(0.1, 0.6), 1);
}catch(error){
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(0.9, 0), 1);
}catch(error){
  console.log('Test failed');
}

try{
  assert.strictEqual(calculateNumber(0.499, 0.1), 0);
}catch(error){
  console.log('Test failed');
}