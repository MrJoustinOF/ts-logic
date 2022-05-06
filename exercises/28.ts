/*

    Task: Given a number, return its factorial number

*/

export const factorialOf = (amount: number): number => {
  const numbers = [];

  for (let i = 1; i <= amount; i++) {
    numbers.push(i);
  }

  const factorial = numbers.reduce((a, b) => a * b);

  return factorial;
};

const main = () => {
  const number = 3;
  const factorial = factorialOf(number);

  const params = ["Factorial of", number, "is", factorial];

  console.log(...params);
};

// main()

// Completed
