/*

    Task: Given a string, censor any word equal to a sencond parameter which is also another string, with [-CENSORED-]
        In case first and second parameter are undefined return "You can't read text and search"

*/

export const censorWords = (sentence: string, word: string): string => {
  const censored = sentence.replaceAll(word, "[-CENSORED-]");

  return censored;
};

const main = () => {
  const sentence =
    "Hi man I'm Joustin, this sentence must censor my name, which is Joustin";
  const word = "Joustin";

  const censoredSentence = censorWords(sentence, word);

  console.log(censoredSentence);
};

// main();

// Completed
