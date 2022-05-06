/*

    Task: Given a number, show a list squaring each number from zero until the number

*/

export const squaringNumbers = (amount: number): number[] => {
  let list = [];

  for (let i = 0; i <= amount; i++) {
    const number = i * i;

    list.push(number);
  }

  return list;
};

const main = () => {
  const number = 5;
  const list = squaringNumbers(number);

  console.log("--- Squared numbers from 0 until", number, "---");

  for (const number of list) {
    console.log(number);
  }

  console.log("--- End ---");
};

// main()

// Completed
