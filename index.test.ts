import { specRange } from './index';

test('adds 1 + 2 to equal 3', () => {
    // expect(sum(1, 2)).toBe(3);
    expect(specRange([ 1.5, 6, 12.1, 13, 19.75, 12.1, 19.7, 6, 7.45, 1.5 ], 6.0, 12.0)).toBe([]);
});