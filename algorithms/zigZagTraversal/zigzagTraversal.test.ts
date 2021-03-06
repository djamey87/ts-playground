import zigzagTraverse from './zigzagTraversal';

test('specRange provides valid output', () => {
    const numbersIn: Array<Array<number>> = [
        [1, 3, 4, 10], 
        [2, 5, 9, 11], 
        [6, 8, 12, 15], 
        [7, 13, 14, 16]
    ];
    const expectedOut: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    expect(zigzagTraverse(numbersIn)).toStrictEqual(expectedOut);
});