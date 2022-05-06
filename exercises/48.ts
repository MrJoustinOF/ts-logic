/*

    Task: Given a string, return which are the chars that only appear once

*/

export const justOnceChars = (sentence: string): [string[], string] => {
  const charsArray = sentence.replaceAll(" ", "").split("");
  const charsCounter = {};

  for (const char of charsArray) {
    charsCounter[char] ? charsCounter[char]++ : (charsCounter[char] = 1);
  }

  const onceChars = [];

  for (const char in charsCounter) {
    if (charsCounter[char] === 1) {
      onceChars.push(char);
    }
  }

  const [firstOnceChar] = onceChars;

  return [onceChars, firstOnceChar];
};

const main = () => {
  const sentence = "some some some words";
  const onceChars = justOnceChars(sentence);

  console.log(onceChars);
};

// main()

// Completed
