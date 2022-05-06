/*

    Task: Given an array of numbers, return another one, with even and odd numbers separated

*/

export const evenAndOddNumbers = (list: number[]): [number[], number[]] => {
  const evenNumbers = [];
  const oddNumbers = [];

  for (const number of list) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }

  return [evenNumbers, oddNumbers];
};

const main = () => {
  const numbers = [1, 2, 3, 4];
  const [even, odd] = evenAndOddNumbers(numbers);

  console.log({
    even,
    odd,
  });
};

// main()

// Completed
