// challenge source: https://github.com/101-Ways/pairing-tests/tree/master/split-the-treasure
// Hint after failure: sort incoming, the highest is the most important number!

type Mapping = {
  [key: string]: number;
};

export function splitTreasure(
  treasureChest: number[],
  seekerCount: number
): Mapping {
  // TODO:
  // - total all
  // - review denominations
  // - is treasureChest count > than seeker count?
  const total = treasureChest.reduce((total, num) => total + num);
  const valueMapping: Mapping = {};

  // let tempNum;
  // treasureChest.forEach(item => {
  //   tempNum = total - item;
  // });

  const denominations = treasureChest.sort((a, b) => a - b);
  // TODO: make denoms unique + count iterations

  const remaining = 0;

  // {
  //   27: 0,
  // ---------
  //   [20: 0,
  //   7: 1]
  // }

  // TODO:

  // divisibleList.forEach((divisibleBy) => {
  //   if (total % divisibleBy === 0) {
  //     valueMapping[divisibleBy] = total / divisibleBy;
  //   }
  // });

  const isDivisibleBy = total % treasureChest.length === 0;

  if (isDivisibleBy) {
    valueMapping[treasureChest.length] = total / treasureChest.length;
  }

  return valueMapping;
}
