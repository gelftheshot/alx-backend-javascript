
const Utils = {
  calculateNumber: function(type, a = 0, b = 0) {
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
        return 'ERROR'
      }
      return aNum / bNum;
    }
  }
};

module.exports = Utils;