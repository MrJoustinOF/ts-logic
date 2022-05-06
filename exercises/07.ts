/*

    Task: Given two numbers, return how many odd numbers are between them

*/

export const oddNumbersBetween = (
  first: number,
  last: number
): [number, number[]] => {
  const oddNumbers = [];

  for (let i = first; i <= last; i++) {
    i % 2 !== 0 && oddNumbers.push(i);
  }

  const { length } = oddNumbers;

  return [length, oddNumbers];
};

const main = () => {
  const [first, last] = [10, 20];

  const [amount, numbers] = oddNumbersBetween(first, last);

  console.log("There are", amount, "odd numbers between", first, "and", last);
  console.log("Which are", numbers);
};

// main();

// Completed
