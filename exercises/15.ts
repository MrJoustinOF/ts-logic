/*

    Task: Given a string, return the most used character

*/

export const mostUsedChar = (sentence: string): [string, number] => {
  const charsArray = sentence
    .toLowerCase()
    .replace(/["'!¡.,-\s]/gi, "")
    .split("");

  const timesObj = {};

  for (const char of charsArray) {
    timesObj[char] ? timesObj[char]++ : (timesObj[char] = 1);
  }

  let finalChar = charsArray[0];

  for (const char in timesObj) {
    if (timesObj[char] > timesObj[finalChar]) {
      finalChar = char;
    }
  }

  let times: number = timesObj[finalChar];

  return [finalChar, times];
};

const main = () => {
  const sentence =
    "Hey, this is just an sentence to see which is the most used char here, my name is Joustin btw";
  const [char, times] = mostUsedChar(sentence);

  console.log(
    char,
    "is the most used char in the sentence, repeated",
    times,
    "times"
  );
};

// main();

// Completed
