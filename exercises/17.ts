/*

    Task: Given a number, show all numbers from 1 until the given number, but, return "buzz" for multiples of 3
        return "lightyear" for multiples of 5, and return "BuzzLightyear" for multiples of 3 and 5

*/

export const buzzLightYearForSomeMultiples = (limit: number): any[] => {
  const results = [];

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("BuzzLightyear");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      results.push("buzz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      results.push("lightyear");
    } else {
      results.push(i);
    }
  }

  return results;
};

const main = () => {
  const limit = 100;
  const arrayNumbers = buzzLightYearForSomeMultiples(limit);

  console.log("--- Numbers from 1 to", limit, "---");

  for (const number of arrayNumbers) {
    console.log(number);
  }

  console.log("--- End ---");
};

// main();

// Completed
