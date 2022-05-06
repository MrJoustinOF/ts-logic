/*

    Task: Given an array of numbers, return it squaring each index

*/

export const squareArray = (list: number[]): number[] => {
  const parsedList = list.map((number) => number * number);

  return parsedList;
};

const main = () => {
  const list = [1, 2, 3, 4, 5];

  const arraySquared = squareArray(list);

  console.log("Normal:", list);
  console.log("Squared:", arraySquared);
};

// main()

// Completed
