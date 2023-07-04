const sum = require("./sum");

test('numbers added', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(2,7)).toBe(9);
    expect(sum(1.5, 5.7)).toBe(7.2);
    expect(sum(69,420)).toBe(489);
    expect(sum(0.1,0.1)).toBeCloseTo(0.1,0.3)
})

test('number not equal to...', () => {
    expect(sum(1,2)).not.toBe(5);
    expect(sum(1.5, 5.7)).not.toBe(420);
    expect(sum(69,420)).not.toBe(-489);
})