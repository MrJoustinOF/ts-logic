/*

    Task: Given a string and a number, return the string cutted until number indicates

*/

export const cutString = (sentence: string, until: number): string => {
  const cuttedString = sentence.slice(0, until);

  return cuttedString;
};

const main = () => {
  const sentence = "Joustin is the best drummer ever";
  const cuttedString = cutString(sentence, 7);

  console.log(cuttedString);
};

// main()

// Completed
