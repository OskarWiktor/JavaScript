const subtract = require("./subtract");

test("numbers subtracted", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2.5, 3.5)).toBe(-1);
    expect(subtract(89, 43)).toBe(46);
})