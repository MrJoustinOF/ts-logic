/*

    Task: Given a string, return all its posible substrings

*/

export const allPosibleSubstrings = (word: string): string[] => {
  const substrings = [];

  const { length } = word;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      substrings.push(word.substring(i, j));
    }
  }

  return substrings;
};

const main = () => {
  const word = "hello";
  const substrings = allPosibleSubstrings(word);

  console.log(substrings);
};

// main()

// Completed
