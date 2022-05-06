/*

    Task: Given an string, return how many vowels it has

*/

export const howManyVowelsIn = (sentence: string): number => {
  const vowels = ["a", "e", "i", "o", "u"];
  const chars = sentence.toLowerCase().split("");

  const { length } = chars.filter((char) => vowels.includes(char));

  return length;
};

const main = () => {
  const sentence =
    "Hey, this is a sentence to see how many vowels are here, my name is Joustin btw";
  const vowelsNumber = howManyVowelsIn(sentence);

  console.log("There are", vowelsNumber, "in", sentence);
};

// main();

// Completed
