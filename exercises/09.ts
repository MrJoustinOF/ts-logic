/*

    Task: Given two arrays, return another one, but just with indexs in common

*/

export const commonIndexs = (firstArray: any[], secondArray: any[]): any[] => {
  const smallestArray =
    firstArray.length < secondArray.length ? firstArray : secondArray;

  const largestArray =
    firstArray.length < secondArray.length ? secondArray : firstArray;

  const commonArray = smallestArray.filter(
    (index) => largestArray.indexOf(index) !== -1
  );

  return commonArray;
};

const main = () => {
  const firstArray = ["a", "b", 2, 3, "x", 1];
  const secondArray = ["b", "c", 3, 4, 1, "jous", 1];

  const similarIndexs = commonIndexs(firstArray, secondArray);

  console.log(similarIndexs);
};

// main();

// Completed
