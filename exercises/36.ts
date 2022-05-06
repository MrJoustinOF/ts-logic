/*

    Task: Given a string, return how many consonants and vowels it has

*/

type consonantsAndVowelsAmountType = {
  consonants: number;
  vowels: number;
};

export const consonantsAndVowelsAmount = (
  word: string
): consonantsAndVowelsAmountType => {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  const parsedWord = word
    .toLowerCase()
    .replace(/["'!¡.,-\s]/gi, "")
    .split("");

  let consonants = 0;
  let vowels = 0;

  for (const char of parsedWord) {
    if (vowelsArray.includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }

  return { consonants, vowels };
};

const main = () => {
  const word = "Joustin";

  const { consonants, vowels } = consonantsAndVowelsAmount(word);

  console.log("Consonants:", consonants);
  console.log("Vowels:", vowels);
};

// main()

// Completed
