var test = require('./index');

describe('Test function should return text', function () {
  it('hello world', function () {
    expect(test()).toBe('hello world');
  });
});
