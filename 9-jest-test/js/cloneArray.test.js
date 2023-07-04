const cloneArray = require("./cloneArray");
const value = [1,'1', 'a', 'b', 'test'];

test('array cloned', () => {
    expect(cloneArray([1,2,3])).toStrictEqual([1,2,3])
    expect(cloneArray(['a', 'b', 1])).not.toStrictEqual(['a', 'b', '1']) 

    expect(cloneArray(value)).toContain('a')
    expect(cloneArray(value)).not.toHaveLength(8)
    expect(cloneArray(value)).toHaveLength(5)
})

test('array cloned - err on purpose', () => {
    expect(cloneArray(['a', 'b', 1])).toStrictEqual(['a', 'b', '1']) 
})