import { percentOf } from "../exercises/05";

describe("result percent", () => {
  test("should be 25", () => {
    const percent = percentOf(50, 50);

    expect(percent).toBe(25);
  });

  test("should be 15", () => {
    const percent = percentOf(25, 60);

    expect(percent).toBe(15);
  });
});
