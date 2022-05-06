/*

    Task: Given a number, return the years, months and days it's equal to

*/

type YearsMonthsDaysType = {
  years: number;
  months: number;
  days: number;
};

export const yearsMonthsDays = (amount: number): YearsMonthsDaysType => {
  const years = Math.floor(amount / 365);
  const months = Math.floor((amount - years * 365) / 30);
  const days = Math.floor(amount - (years * 365 + months * 30));

  return { years, months, days };
};

const main = () => {
  const amount = 920;
  const { years, months, days } = yearsMonthsDays(amount);

  const params = [
    amount,
    "is equal to",
    years,
    "years,",
    months,
    "months,",
    "and",
    days,
    "days",
  ];

  console.log(...params);
};

// main()

// Completed
