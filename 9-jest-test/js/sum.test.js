const sum = require("./sum");

test("numbers added", () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(2,7)).toBe(9);
    expect(sum(1.5, 5.7)).toBe(7.2);
    expect(sum(69,420)).toBe(489);
})