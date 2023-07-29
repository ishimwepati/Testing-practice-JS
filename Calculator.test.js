const Calculator = require('./Calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    it('should add two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(-5, 5)).toBe(0);
    });

    it('should add negative and positive numbers correctly', () => {
      expect(calculator.add(-7, 3)).toBe(-4);
      expect(calculator.add(5, -2)).toBe(3);
    });

    it('should add decimals correctly', () => {
      expect(calculator.add(1.5, 2.3)).toBe(3.8);
    });
  });

  describe('subtract method', () => {
    it('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
      expect(calculator.subtract(5, 5)).toBe(0);
    });

    it('should subtract negative and positive numbers correctly', () => {
      expect(calculator.subtract(-7, 3)).toBe(-10);
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    it('should subtract decimals correctly', () => {
      expect(calculator.subtract(1.5, 0.5)).toBe(1);
    });
  });

  describe('divide method', () => {
    it('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
      expect(calculator.divide(10, 5)).toBe(2);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    it('should divide negative and positive numbers correctly', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
      expect(calculator.divide(10, -2)).toBe(-5);
    });
  });

  describe('multiply method', () => {
    it('should multiply two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    it('should multiply negative and positive numbers correctly', () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
      expect(calculator.multiply(4, -2)).toBe(-8);
    });

    it('should multiply decimals correctly', () => {
      expect(calculator.multiply(1.5, 2)).toBe(3);
    });
  });
});
