import { specRange } from './index';

test('specRange provides valid output', () => {
    const nums: Array<number> = [ 1.5, 6, 12.1, 13, 19.75, 12.1, 19.7, 6, 7.45, 1.5 ];
    const expectedOut: Array<number> = [1.5, 12.1, 13, 19.75, 19.7];
    expect(specRange(nums, 6.0, 12.0)).toStrictEqual(expectedOut);
});