/*

    Task: Given a number, return it backwards (54 will return 45)

*/

export const backwardsNumber = (num: number): number => {
  const stringNumber = num.toString().split("").reverse().join("");
  const parsedNumber = parseInt(stringNumber);

  return parsedNumber;
};

const main = () => {
  const number = backwardsNumber(4567);

  console.log(number);
};

// main();

// Completed
