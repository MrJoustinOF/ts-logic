/*

    Task: given a word, search it in a sentence and return how many times it is repeated

*/

export const howManyTimesRepeatedIsAWord = (
  word: string,
  sentence: string
): number => {
  const regex = /["'!¡.,-]/gi;

  const parsedWord = word.toLowerCase();
  const parsedSentece = sentence.toLowerCase().replace(regex, "");

  const { length } = parsedSentece
    .split(" ")
    .filter((indexWord: string) => indexWord === parsedWord);

  return length;
};

const main = () => {
  const word = "word";
  const sentence =
    "hey this is a random sentence with a special word, so this must return 2 'cause word is repeated 2 times";

  const times = howManyTimesRepeatedIsAWord(word, sentence);

  console.log(`"${word}"`, "has matched", times, "times in", `"${sentence}"`);
};

// main();

// Completed
