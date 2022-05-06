/*

    Task: Given a number, return a list of numbers from 8 to 8 until 0

*/

export const untilZero = (num: number): number[] => {
  const numbersArray = [];

  for (let i = num; i > 0; i -= 8) {
    numbersArray.push(i);
  }

  return numbersArray;
};

const main = () => {
  const amount = 100;
  const numbersList = untilZero(amount);

  console.log("-- From", amount, "to", 0, "---");

  for (const number of numbersList) {
    console.log("- nº", number);
  }

  console.log("--- End ---");
};

// main();

// Completed
