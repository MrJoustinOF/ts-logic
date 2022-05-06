/*

    Task: Given two strings, comprobate if they are anagrams
    .replace(/[!¡.,-]/gi, "")
*/

const parseParam = (param: string): string[] =>
  param
    .toLowerCase()
    .replace(/["'!¡.,-\s]/gi, "")
    .split("");

export const areAnagrams = (firstWord: string, secondWord: string): boolean => {
  const first = parseParam(firstWord);
  const second = parseParam(secondWord);

  if (first.length !== second.length) {
    return false;
  }

  for (const char of first) {
    if (!second.includes(char)) {
      return false;
    }
  }

  return true;
};

const main = () => {
  const firstWord = "Undertale";
  const secondWord = "Deltarune";

  const test = areAnagrams(firstWord, secondWord);

  console.log(
    firstWord,
    "and",
    secondWord,
    test ? "are" : "are not",
    "anagrams"
  );
};

// main()

// Completed
