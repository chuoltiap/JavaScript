const sum = require('./sum');
test('test 2 plus 3 to be 5', () => {
    expect(sum(2, 5)).toBe(5);
});