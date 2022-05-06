/*

    Task: Given two numbers, return a random number between them

*/

export const randomBetween = (min: number, max: number): number => {
  const result = Math.round(Math.random() * (max - min) + min);

  return result;
};

const main = () => {
  const first = 50;
  const second = 100;

  const random = randomBetween(first, second);

  console.log(random);
};

// main()

// Completed
