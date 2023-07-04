const subtract = require("./subtract");

test('numbers subtracted', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2.5, 3.5)).toBe(-1);
    expect(subtract(89, 43)).toBe(46);
})

test('number not equal to...', () => {
    const message ='should throw an error when the second argument is not a number';
    expect(subtract(5, 2)).not.toBe(2);
    expect(subtract(2.5, 3.5)).not.toBe(-11111);
    expect(subtract(34,89)).not.toBeNull();
    expect(subtract(8,8)).toBeFalsy();
})