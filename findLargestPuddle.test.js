const findLargestPuddle =  require('./findLargestPuddle');

test('largest puddle of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2] to equal [3, 8, 11]', () => {
    expect(findLargestPuddle([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
});

test('largest puddle of [0, 3, 7, 2, 6, 4, 5, 9, 1, 0] to equal [3, 8, 11]', () => {
    expect(findLargestPuddle([0, 3, 7, 2, 6, 4, 5, 9, 1, 0])).toEqual([3, 8, 11]);
});

test('largest puddle of [5, 3, 7, 2, 6, 4, 5, 6, 1, 2] to equal [3, 5, 4]', () => {
    expect(findLargestPuddle([5, 3, 7, 2, 6, 4, 5, 6, 1, 2])).toEqual([3, 5, 4]);
});

test('largest puddle of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] to equal []', () => {
    expect(findLargestPuddle([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
});


test('largest puddle of [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] to equal []', () => {
    expect(findLargestPuddle([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
});

test('flat heights return empty array', () => {
    expect(findLargestPuddle([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])).toEqual([]);
});



