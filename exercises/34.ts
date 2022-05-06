/*

    Task: Given two numbers, return each basic operation (addition, subtraction, multiplication, division)

*/

type calculatorResults = {
  addition: number;
  subtraction: number;
  multiplication: number;
  division: number;
};

export const calculator = (
  firstNumber: number,
  secondNumber: number
): calculatorResults => {
  const addition = firstNumber + secondNumber;
  const subtraction = firstNumber - secondNumber;
  const multiplication = firstNumber * secondNumber;
  const division = firstNumber / secondNumber;

  return { addition, subtraction, multiplication, division };
};

const main = () => {
  const firstNumber = 5;
  const secondNumber = 2;

  const { addition, subtraction, multiplication, division } = calculator(
    firstNumber,
    secondNumber
  );

  console.log(firstNumber, "+", secondNumber, "=", addition);
  console.log(firstNumber, "-", secondNumber, "=", subtraction);
  console.log(firstNumber, "*", secondNumber, "=", multiplication);
  console.log(firstNumber, "/", secondNumber, "=", division);
};

// main()

// Completed
