/*

    Task: Given an object, verify if a propertie in particular exists

*/

export const verifyProp = (object: {}, prop: string): boolean => {
  const propInObject = object[prop];

  return propInObject ? true : false;
};

const main = () => {
  const user = { name: "Joustin" };

  const verifyEmail = verifyProp(user, "email");
  const verifyName = verifyProp(user, "name");

  console.log(verifyEmail, verifyName);
};

// main()

// Completed
