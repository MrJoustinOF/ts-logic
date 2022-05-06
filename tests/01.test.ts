import { multiplicationTableOf } from "../exercises/01";

describe("multiplication table", () => {
  const table = multiplicationTableOf(2);

  test("should return 12 indexs", () => {
    const { length } = table;

    expect(length).toBe(12);
  });

  test("should return the same nultiplicand as product in the first index", () => {
    const [{ multiplicand, product }] = table;

    expect(multiplicand).toBe(product);
  });
});
