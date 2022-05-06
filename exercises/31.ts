/*

    Task: Given a number, indicate what kind of angule is

*/

export const kindOfAnguleByNumber = (amount: number): string => {
  let type = "";

  if (amount === 90) {
    type = "right";
  } else if (amount > 90) {
    type = "obtuse";
  } else if (amount < 90) {
    type = "acute";
  }

  return type;
};

const main = () => {
  const firstNumber = 90;
  const secondNumber = 45;
  const thirdNumber = 180;

  const firstAngle = kindOfAnguleByNumber(firstNumber);
  const secondAngle = kindOfAnguleByNumber(secondNumber);
  const thirdAngle = kindOfAnguleByNumber(thirdNumber);

  console.log(firstNumber, "is", firstAngle, "angule");
  console.log(secondNumber, "is", secondAngle, "angule");
  console.log(thirdNumber, "is", thirdAngle, "angule");
};

// main()

// Completed
