/*

    Task: Draw a square with the number of "*" specified at a parameter of a function

*/

export const drawSquare = (amount: number): string => {
  let topAndBottomSides = "";

  for (let i = 0; i < amount; i++) {
    topAndBottomSides += "*";
  }

  topAndBottomSides += "\n";

  let centerSides = "*";

  for (let i = 0; i < amount - 2; i++) {
    centerSides += " ";
  }

  centerSides += "*\n";

  let square = topAndBottomSides;

  for (let i = 0; i < amount - 2; i++) {
    square += centerSides;
  }

  square += topAndBottomSides;

  return square;
};

const main = () => {
  const square = drawSquare(5);
  console.log(square);
};

// main();

// Completed
