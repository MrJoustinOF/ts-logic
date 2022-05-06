/*

    Task: Given a collection (each object must have title, director, seen), show indicating which you've seen or not

*/

type MovieObject = {
  title: string;
  director: string;
  seen: boolean;
};

export const seenAndNotSeen = (collection: MovieObject[]): string[][] => {
  let seen = [];
  let notSeen = [];

  for (const movie of collection) {
    const { title, director, seen: movieHasBeenSeen } = movie;

    const textToArray = `${title} by ${director}`;

    movieHasBeenSeen ? seen.push(textToArray) : notSeen.push(textToArray);
  }

  return [seen, notSeen];
};

const main = () => {
  const collection = [
    { title: "Superbad", director: "Greg Mottola", seen: true },
    { title: "Train to busan", director: "Yeon Sang-ho", seen: true },
    {
      title: "Doctor Strange in the multiverse of madness",
      director: "San Raimi",
      seen: false,
    },
  ];

  const [seen, notSeen] = seenAndNotSeen(collection);

  console.log("--- You've seen: --- \n");

  for (const movie of seen) {
    console.log(movie, "\n");
  }

  console.log("--- You have not seen: --- \n");

  for (const movie of notSeen) {
    console.log(movie, "\n");
  }

  console.log("--- End ---");
};

// main();

// Completed
