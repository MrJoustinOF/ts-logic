/*

    Task: Given a number, return all its divisors

*/

export const returnDivisors = (num: number): number[] => {
  const divisors = [];

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const main = () => {
  const number = 10;
  const divisorsOfNumber = returnDivisors(number);

  console.log("--- Divisors of", number, "---");

  for (const number of divisorsOfNumber) {
    console.log(number);
  }

  console.log("--- End ---");
};

// main();

// Completed
