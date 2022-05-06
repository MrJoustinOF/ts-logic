/*

    Task: given a string, return it backwards just using control structures (for, while, etc), 
        no js methods are allowed (split, join, etc)

*/

export const backwardsOf = (word: string, exact?: boolean): string => {
  if (!exact) {
    word = word.toLowerCase();
  }

  let newWord = "";

  for (let i = word.length - 1; i > -1; i--) {
    newWord += word.charAt(i);
  }

  return newWord;
};

const main = () => {
  const backwardsWord = backwardsOf("Joustin");

  console.log(backwardsWord);
};

// main()

// Completed
