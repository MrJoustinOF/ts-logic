/*

    Task: Given an array, return another one with just the first and last indexs

*/

export const firstAndLastIndexs = (list: any[]): any[] => {
  const [firstIndex] = list;
  const lastIndex = list[list.length - 1];

  return [firstIndex, lastIndex];
};

const main = () => {
  const list = [5, 3, 1, "c", "a", "b"];

  const indexs = firstAndLastIndexs(list);

  console.log(indexs);
};

// main()

// Completed
