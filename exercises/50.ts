/*

    Task: Given a number, return how many circles are in there, you can base on the next table
    
    0 has 1 circle
    6 has 1 circle
    8 has 2 circle
    9 has 1 circle

*/

export const circlesIn = (amount: number): number => {
  const numbersWithCircles = {
    0: 1,
    6: 1,
    8: 2,
    9: 1,
  };

  const numbersArray = amount.toString().split("");
  let circles = 0;

  for (const number of numbersArray) {
    if (numbersWithCircles[number]) {
      circles += numbersWithCircles[number];
    }
  }

  return circles;
};

const main = () => {
  const amount = 28861;
  const circles = circlesIn(amount);

  console.log(circles);
};

// main()

// Completed
