import { howManyTimesRepeatedIsAWord } from "../exercises/03";

describe("counter", () => {
  test("should return 2", () => {
    const word = "programmer";
    const sentence = "joustin is a programmer, gabriel is also a programmer";

    const result = howManyTimesRepeatedIsAWord(word, sentence);

    expect(result).toBe(2);
  });

  test("should return 0", () => {
    const word = "a";
    const sentence = "aaaa";

    const result = howManyTimesRepeatedIsAWord(word, sentence);

    expect(result).toBe(0);
  });
});
