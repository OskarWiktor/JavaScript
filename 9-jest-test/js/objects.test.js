const house = require('./object')

test('house have this values', () => {
    expect(house).toHaveProperty('bath');
    expect(house).toHaveProperty('bedroom', 4)
    expect(house).toHaveProperty('kitchen.kitchenEquipment', ['oven', 'washer', 'microwave'])
})