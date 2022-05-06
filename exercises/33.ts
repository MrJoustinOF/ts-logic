/*

    Task: Make a watch showing time each second

*/

export const startWatch = (date: Date): void => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  setInterval(() => {
    seconds++;

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    const format = [hours, ":", minutes, ":", seconds];

    console.log(...format);
  }, 1000);
};

const main = () => {
  const date = new Date();

  startWatch(date);
};

// main()

// Completed
