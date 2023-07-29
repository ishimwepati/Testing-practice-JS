const stringLength = require('./index');

describe('stringLength function', () => {
  it('should return the correct length of a string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('')).toBe(0);
    expect(stringLength('a')).toBe(1);
    expect(stringLength('1234567890')).toBe(10);
  });

  it('should throw an error if input is not a string', () => {
    expect(() => stringLength(123)).toThrow('Input must be a string');
    expect(() => stringLength(null)).toThrow('Input must be a string');
    expect(() => stringLength(undefined)).toThrow('Input must be a string');
    expect(() => stringLength({})).toThrow('Input must be a string');
  });

  it('should throw an error if string length is less than 1 or greater than 10', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
    expect(() => stringLength('a')).not.toThrow();
    expect(() => stringLength('12345678901')).toThrow('String length must be between 1 and 10 characters');
  });
});
