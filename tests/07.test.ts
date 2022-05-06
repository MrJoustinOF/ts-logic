import { oddNumbersBetween } from "../exercises/07";

describe("odd numbers between 10 and 20", () => {
  const [amount, numbers] = oddNumbersBetween(10, 20);

  test("should be 5", () => {
    expect(amount).toBe(5);
  });

  test("should be this exactly array", () => {
    const list = [11, 13, 15, 17, 19];

    expect(numbers).toStrictEqual(list);
  });
});
