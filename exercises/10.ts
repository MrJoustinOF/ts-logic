/*

    Task: Given a number, return a stairs sequence of [-], as much steps as specified at a number

*/

export const drawStairsSequence = (steps: number): string => {
  let stairs = "";

  for (let i = 0; i < steps; i++) {
    let step = "";

    for (let j = 0; j <= i; j++) {
      step += "[-]";
    }

    step += "\n";
    stairs += step;
  }

  return stairs;
};

const main = () => {
  const stairs = drawStairsSequence(5);
  console.log(stairs);
};

// main()

// Completed
