/*

    Task: Given two numbers, return the biggest and smallest

*/

export const biggestAndSmallest = (
  firstNum: number,
  secondNum: number
): number[] => {
  const biggest = firstNum > secondNum ? firstNum : secondNum;
  const smallest = firstNum < secondNum ? firstNum : secondNum;

  return [biggest, smallest];
};

const main = () => {
  const firstNum = 3;
  const secondNum = 5;

  const [biggest, smallest] = biggestAndSmallest(firstNum, secondNum);

  console.log("The biggest number is:", biggest);
  console.log("The smallest number is:", smallest);
};

// main()

// Completed
