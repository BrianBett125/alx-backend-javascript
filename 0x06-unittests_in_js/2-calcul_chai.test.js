const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', -2, -5.9)).to.equal(-8); 
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', -2, -5.9)).to.equal(4);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2); 
      expect(calculateNumber('DIVIDE', -2, -5.9)).to.equal(2 / 6);
    });

    it('should return Error when divisor is zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -2, 0)).to.equal('Error');
    });
  });
});
