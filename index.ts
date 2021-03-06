
// accept 3 parameters, an array of numbers, a min and a max number (a range)
// return no duplicates, all the numbers which are outside the specified range
// Sample data:

// numbers: [ 1.5, 6, 12.1, 13, 19.75, 12.1, 19.7, 6, 7.45, 1.5 ]

// min: 6.0

// max: 12.0

export const specRange = (numbers:Array<number>, min: number, max:number): Array<number> => {
  let found = {};
  let out: Array<number> = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min || numbers[i] > max) {
      
      if (!found.hasOwnProperty(numbers[i])) {
        found[numbers[i]] = true;
        out.push(numbers[i]);
      }
    }
  }

  return out;
};