/*

    Task: Given a string, capitalize each word and return the string

*/

export const capitalizeEachWord = (sentence: string): string => {
  const parsedSentence = sentence.toLowerCase().split(" ");
  let finalSentece = "";

  for (const word of parsedSentence) {
    const firstChar = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1, word.length);

    finalSentece += firstChar + restOfWord + " ";
  }

  return finalSentece;
};

const main = () => {
  const sentence = "hey, i am joustin, contact me!";
  const capitalizedSentence = capitalizeEachWord(sentence);

  console.log(capitalizedSentence);
};

// main()

// Completed
