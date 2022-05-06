/*

    Task: Given a string and a number, repeat the string as much as number indicates

*/

export const repeatIt = (word: string, amount: number): string => {
  const repeatedWord = word.repeat(amount);

  return repeatedWord;
};

const main = () => {
  const repeatedWord = repeatIt("jous", 3);

  console.log(repeatedWord);
};

// main();

// Completed
