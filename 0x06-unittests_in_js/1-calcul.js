module.exports = function calculateNumber(a, b = 0, type) {
  const aNum = Math.round(Number(a));
  const bNum = Math.round(Number(b));
  if (Number.isNaN(aNum) || Number.isNaN(bNum))
    throw TypeError('Parameters must be numbers');

  if (type === 'SUM') {
    return aNum + bNum;
  }

  if (type === 'SUBTRACT') {
    return aNum - bNum;
  }

  if (type === 'DIVIDE') {
    if (bNum === 0) {
      throw Error('Cannot divide by 0');
    }
    return aNum / bNum;
  }
};