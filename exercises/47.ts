/*

    Task: Given a collection, return the most common user hobbies

*/

type User = {
  name: string;
  hobbie: string;
};

export const mostCommonHobbies = (list: User[]): {} => {
  const hobbies = {};

  for (const user of list) {
    const { hobbie } = user;

    hobbies[hobbie] ? hobbies[hobbie]++ : (hobbies[hobbie] = 1);
  }

  return hobbies;
};

const main = () => {
  const users = [
    {
      name: "Joustin",
      hobbie: "programming",
    },
    {
      name: "Orlando",
      hobbie: "drumming",
    },
    {
      name: "Alfonso",
      hobbie: "programming",
    },
    {
      name: "Alejandro",
      hobbie: "drumming",
    },
    {
      name: "Marcelo",
      hobbie: "programming",
    },
    {
      name: "Mario",
      hobbie: "basketball",
    },
  ];

  const hobbies = mostCommonHobbies(users);

  console.log(hobbies);
};

// main()

// Completed
