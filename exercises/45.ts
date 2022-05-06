/*

    Task: Given a collection of students, return how many are aproved or failed

*/

type Student = {
  name: string;
  score: number;
};

export const aprovedAndFailedStudents = (
  students: Student[]
): [Student[], Student[]] => {
  const aproved = [];
  const failed = [];

  for (const student of students) {
    const { score } = student;

    if (score >= 7) {
      aproved.push(student);
    } else {
      failed.push(student);
    }
  }

  return [aproved, failed];
};

const main = () => {
  const collection = [
    {
      name: "Joustin",
      score: 10,
    },
    {
      name: "Orlando",
      score: 9,
    },
    {
      name: "Alfonso",
      score: 6,
    },
    {
      name: "Roberto",
      score: 5,
    },
    {
      name: "Mario",
      score: 8,
    },
  ];

  const [aproved, failed] = aprovedAndFailedStudents(collection);

  console.log("--- Aproved Students ---");
  console.table(aproved);

  console.log("--- Failed Students ---");
  console.table(failed);
};

// main()

// Completed
