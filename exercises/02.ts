/*

    Task: given a string, verify if it is a palindrome (if it is the same reading backwards)

*/

export const isPalindrome = (sentence: string): boolean => {
  const backwards = sentence.toLowerCase().split("").reverse().join("");

  return sentence.toLowerCase() === backwards ? true : false;
};

const main = () => {
  const verifyOtto = isPalindrome("Otto");
  const verifyJoustin = isPalindrome("Joustin");

  console.log(verifyOtto, verifyJoustin);
};

// main();

// Completed
