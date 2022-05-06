/*

    Task: Given an array of numbers, return the smallest and biggest indexs

*/

export const smallestAndBiggest = (list: number[]): number[] => {
  let smallest = list[0];

  for (const number of list) {
    if (number < smallest) {
      smallest = number;
    }
  }

  let biggest = list[0];

  for (const number of list) {
    if (number > biggest) {
      biggest = number;
    }
  }

  return [smallest, biggest];
};

const main = () => {
  const list = [1, 3, 8, 5, 7, 10, 0];
  const [smallest, biggest] = smallestAndBiggest(list);

  console.log("Smallest:", smallest);
  console.log("Biggest:", biggest);
};

// main()

// Completed
