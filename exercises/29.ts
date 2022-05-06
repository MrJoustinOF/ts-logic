/*

    Task: Given a number, verify if its a palindromic number

*/

export const isPalindromicNumber = (amount: number): boolean => {
  const reverseNumber = parseInt(
    amount.toString().split("").reverse().join("")
  );

  if (reverseNumber === amount) {
    return true;
  }

  return false;
};

const main = () => {
  const number = 2002;

  const palindromic = isPalindromicNumber(number);

  console.log(palindromic);
};

// main()

// Completed
