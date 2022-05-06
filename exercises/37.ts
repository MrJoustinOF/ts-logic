/*

    Task: Given an array or string, return the index or word most repeated

*/

export const mostRepeated = (input: string | any[]): any => {
  let parsedArray = input;

  if (input.toString() === input) {
    parsedArray = input
      .toLowerCase()
      .replace(/["'!¡.,-]/gi, "")
      .split(" ");
  }

  let counter = {};

  for (const i of parsedArray) {
    if (!counter[i]) {
      counter[i] = 0;
    }

    counter[i]++;
  }

  const keys = Object.keys(counter);
  let finalIndex = keys[0];

  for (const key of keys) {
    const currentValue = counter[key];

    if (currentValue > counter[finalIndex]) {
      finalIndex = key;
    }
  }

  return finalIndex;
};

const main = () => {
  const stringParameter = "Hi, Joustin is here, repeating, Joustin";
  const arrayParameter = [1, 3, 2, 1, 5];

  const stringResult = mostRepeated(stringParameter);
  const arrayResult = mostRepeated(arrayParameter);

  console.log(stringResult);
  console.log(arrayResult);
};

// main()

// Completed
