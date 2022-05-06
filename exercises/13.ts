/*

    Task: Given an array, divide it in many sub-arrays based on a number that indicates its size

*/

export const divideArray = (array: any[], amount: number): number[][] => {
  const lengthForSubArray = Math.floor(array.length / amount);
  const rest = array.length - lengthForSubArray * amount;

  const finalArray = [];
  const initialLength = lengthForSubArray + rest;

  finalArray.push(array.slice(0, initialLength));

  for (let i = initialLength; i < array.length; i += lengthForSubArray) {
    finalArray.push(array.slice(i, i + lengthForSubArray));
  }

  return finalArray;
};

const main = () => {
  const array = [1, 2, 3, 4, 5];

  const dividedArray = divideArray(array, 3);

  console.log(dividedArray);
};

// main();

// Completed
