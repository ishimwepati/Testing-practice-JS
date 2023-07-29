// capitalize.test.js
const capitalize = require('./capitalize');

describe('capitalize function', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('javascript')).toBe('Javascript');
  });
});
