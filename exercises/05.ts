/*

    Task: return x percent of x number

*/

export const percentOf = (percent: number, num: number): number => {
  const result = (num * percent) / 100;

  return result;
};

const main = () => {
  const result = percentOf(50, 50);

  console.log(result);
};

// main();

// Completed
