/*

    Task: Given an array and a number, verify if the array is a permutation from 1 to the given number

*/

export const isAPermutation = (array: number[], num: number): boolean => {
  const realPermutation = [...new Array(num)].map((e, i) => i + 1);

  for (let i = 0; i < num; i++) {
    if (realPermutation[i] !== array[i]) {
      return false;
    }
  }

  return true;
};

const main = () => {
  const array = [1, 2, 3, 4, 5];
  const verify = isAPermutation(array, 5);

  console.log(verify);
};

// main()

// Completed
