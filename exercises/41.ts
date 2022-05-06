/*

    Task: Given a number, show a triangle of asterisks with that number of rows

*/

export const showTriangle = (rows: number): string => {
  let triangle = "";

  let spacesAmount = rows - 1;
  let asterisksAmount = 0;

  for (let i = 0; i < rows; i++) {
    let spaces = "";
    let asterisks = "";

    for (let j = 0; j < spacesAmount; j++) {
      spaces += " ";
    }

    for (let j = 0; j < asterisksAmount; j++) {
      asterisks += "*";
    }

    triangle += spaces + asterisks + "*" + asterisks + "\n";

    spacesAmount--;
    asterisksAmount++;
  }

  return triangle;
};

const main = () => {
  const triangle = showTriangle(4);
  console.log(triangle);
};

// main()

// Completed
