var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 7', function () {
      chai.expect(calculateNumber('SUM', 3, 4)).to.equal(7);
    });
  });

  describe('SUM first round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 2.5, 5.5)).to.equal(8);
    });
  });

  describe('SUM second round ', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 4, 2)).to.equal(6);
    });
  });

  describe('SUM both round', function () {
    it('should return 7', function () {
      chai.expect(calculateNumber('SUM', 3.5, 3.5)).to.equal(7);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 4', function () {
      chai.expect(calculateNumber('SUBTRACT', 7, 3)).to.equal(4);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -2', function () {
      chai.expect(calculateNumber('SUBTRACT', 2.5, 4.5)).to.equal(-2);
    });
  });

  describe('SUBTRACT second round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('SUBTRACT', 4.5, 2.5)).to.equal(2);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -3', function () {
      chai.expect(calculateNumber('SUBTRACT', 1.5, 4.5)).to.equal(-3);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 4', function () {
      chai.expect(calculateNumber('DIVIDE', 10, 2.5)).to.equal(4);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.5', function () {
      chai.expect(calculateNumber('DIVIDE', 2.5, 5)).to.equal(0.5);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.3', function () {
      chai.expect(calculateNumber('DIVIDE', 1.5, 5)).to.equal(0.3);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
