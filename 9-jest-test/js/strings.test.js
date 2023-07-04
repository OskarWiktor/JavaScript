const strings = require("./strings")

test('there is no x', () => {
    expect('abcd').not.toMatch('x');
    expect('abcd').toHaveLength(4);
    expect(strings).toContain('milk');
    expect(strings).toBeDefined();
})