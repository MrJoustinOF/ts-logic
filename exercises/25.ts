/*

    Task: Given a string, set it as UPPERCASE or lowercase depending on which case have most chars

*/

export const setUpperOrLowerCase = (word: string): string => {
  const arrayChars: string[] = word.split("");

  let upperCaseCounter = 0;
  let lowerCaseCounter = 0;

  for (const char of arrayChars) {
    const uppercase = char.toUpperCase();

    if (uppercase === char) {
      upperCaseCounter++;
    } else {
      lowerCaseCounter++;
    }
  }

  const finalCase: string =
    upperCaseCounter > lowerCaseCounter
      ? word.toUpperCase()
      : word.toLowerCase();

  return finalCase;
};

const main = () => {
  const upperCaseWord = setUpperOrLowerCase("JoUsTiN");
  const lowerCaseWord = setUpperOrLowerCase("jOuStIn");

  console.log(upperCaseWord, lowerCaseWord);
};

main();

// Completed
