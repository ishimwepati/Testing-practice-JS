const reverseString = require('./reverseString');

describe('reverseString function', () => {
  it('should reverse a string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('abcdefg')).toBe('gfedcba');
    expect(reverseString('12345')).toBe('54321');
  });

  it('should throw an error if input is not a string', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string');
    expect(() => reverseString(null)).toThrow('Input must be a string');
    expect(() => reverseString(undefined)).toThrow('Input must be a string');
    expect(() => reverseString({})).toThrow('Input must be a string');
  });
});
