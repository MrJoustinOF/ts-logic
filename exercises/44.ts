/*

    Task: Given an array of strings, return another one just with the indexs formated with 2 words

*/

export const twoWordIndexs = (list: string[]): string[] => {
  const resultList = [];

  for (const index of list) {
    const { length } = index.split(" ");

    if (length > 1) {
      resultList.push(index);
    }
  }

  return resultList;
};

const main = () => {
  const list = [
    "joustin",
    "vice city",
    "drumming",
    "programming",
    "san andreas",
  ];
  const onlyTwoWordIndexs = twoWordIndexs(list);

  console.log(onlyTwoWordIndexs);
};

// main()

// Complete
