const cloneArray = require("./cloneArray")

test("array cloned", () => {
    expect(cloneArray([1,2,3])).toStrictEqual([1,2,3])
})