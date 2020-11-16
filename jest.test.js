test('test common matcher', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)
})

test('test to be boolean', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test object', () => {
    expect({ name: 'xikun' }).toEqual({ name: 'xikun' })
})