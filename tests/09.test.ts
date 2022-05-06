import { commonIndexs } from "../exercises/09";

describe("common indexs", () => {
  test("should be ['b', 3, 1]", () => {
    const firstArray = ["a", 1, 3];
    const secondArray = [2, 3, "a", 4];

    const similarIndexs = commonIndexs(firstArray, secondArray);

    expect(similarIndexs).toStrictEqual(["a", 3]);
  });
});
