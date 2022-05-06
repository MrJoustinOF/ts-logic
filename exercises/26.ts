/*

    Task: Given a number, return its fibonacci serie  (0 + 1 = 1 + 1 = 2 + 1 = 3 + 2 = 5)

*/

export const fibonacciSerie = (amount: number): [number[], number] => {
  let serie = [0, 1];

  for (let i = 2; i <= amount; i++) {
    const { length } = serie;

    const lastIndex = serie[length - 1];
    const beforeLastIndex = serie[length - 2];

    const numberToSerie = lastIndex + beforeLastIndex;

    serie.push(numberToSerie);
  }

  const lastIndex = serie[serie.length - 1];

  return [serie, lastIndex];
};

const main = () => {
  const number = 10;

  const [serie, lastIndex] = fibonacciSerie(number);

  console.log("Full serie:", serie);
  console.log("Fibonnacci serie result:", lastIndex);
};

// main()

// Completed
