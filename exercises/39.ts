/*

    Task: Verify an email using regular expresions

*/

export const verifyEmail = (email: string): boolean => {
  const result = /^\w+@\w+\.\w+$/.test(email);

  return result;
};

const main = () => {
  const realEmail = "a@a.com";
  const fakeEmail = "asasvcac.com";

  const firstTest = verifyEmail(realEmail);
  const secondTest = verifyEmail(fakeEmail);

  console.log(firstTest);
  console.log(secondTest);
};

// main()

// Completed
