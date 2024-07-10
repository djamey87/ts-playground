import { splitTreasure } from "./index";

describe("treasure chest", () => {
  test("4,4,4", () => {
    expect(splitTreasure([4, 4, 4], 3)).toEqual({ 3: 4 });
  });
  test("27,7,20", () => {
    expect(splitTreasure([27, 7, 20], 2)).toEqual({
      total: 54,
      isDivisible: true,
    });
  });
});
