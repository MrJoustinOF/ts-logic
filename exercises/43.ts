/*

    Task: Given an array of numbers, return its average

*/

export const averageOf = (list: number[]): number => {
  const addition = list.reduce((a, b) => a + b);
  const { length } = list;

  const result = addition / length;

  return result;
};

const main = () => {
  const list = [2, 4, 7, 8, 1];
  const average = averageOf(list);

  console.log(average);
};

// main()

// Completed
