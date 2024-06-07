var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 7', function () {
      chai.expect(calculateNumber('SUM', 3, 4)).to.equal(7);
    });
  });

  describe('SUM first round', function () {
    it('should return 7', function () {
      chai.expect(calculateNumber('SUM', 2.7, 4)).to.equal(7);
    });
  });

  describe('SUM second round ', function () {
    it('should return 7', function () {
      chai.expect(calculateNumber('SUM', 4, 2.7)).to.equal(7);
    });
  });

  describe('SUM both round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 3.5, 4.4)).to.equal(8);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 1', function () {
      chai.expect(calculateNumber('SUBTRACT', 5, 4)).to.equal(1);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -1', function () {
      chai.expect(calculateNumber('SUBTRACT', 2.7, 4)).to.equal(-1);
    });
  });

  describe('SUBTRACT second round', function () {
    it('should return 1', function () {
      chai.expect(calculateNumber('SUBTRACT', 4, 2.7)).to.equal(1);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return 0', function () {
      chai.expect(calculateNumber('SUBTRACT', 3.5, 4.4)).to.equal(0);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 0.75', function () {
      chai.expect(calculateNumber('DIVIDE', 2.7, 4)).to.equal(0.75);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 1.33', function () {
      chai.expect(calculateNumber('DIVIDE', 4, 2.7)).to.closeTo(1.33, 0.01);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 1', function () {
      chai.expect(calculateNumber('DIVIDE', 3.5, 4.4)).to.equal(1);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 3.5, 0)).to.equal('ERROR');
    });
  });
});