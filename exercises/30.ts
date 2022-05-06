/*

    Task: Given an array of numbers, return it without any duplicate index

*/

export const noDuplicateNumbers = (list: number[]): number[] => {
  const newList = [];

  for (const i of list) {
    if (!newList.includes(i)) {
      newList.push(i);
    }
  }

  return newList;
};

const main = () => {
  const list = [0, 1, 2, 3, 2, 1, 4, 5, 5, 5];

  const noDuplicateIndexs = noDuplicateNumbers(list);

  console.log("Old:", list);
  console.log("New:", noDuplicateIndexs);
};

// main()

// Completed
