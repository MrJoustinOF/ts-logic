/* 

    Task: return the whole multiplication table (until 12) from a number given in a function 

*/

type Result = {
  multiplicand: number;
  symbol: string;
  multiplier: number;
  equalTo: string;
  product: number;
};

export const multiplicationTableOf = (multiplicand: number): Result[] => {
  const multiplicationTable = [];
  const symbol = "*";
  const equalTo = "=";

  for (let multiplier = 1; multiplier <= 12; multiplier++) {
    const product = multiplicand * multiplier;

    multiplicationTable.push({
      multiplicand,
      symbol,
      multiplier,
      equalTo,
      product,
    });
  }

  return multiplicationTable;
};

const main = () => {
  const multiplicationTable = multiplicationTableOf(2);

  console.log("Multiplication table of", 2);
  console.table(multiplicationTable);
};

// main()

// Completed
