import { isPalindrome } from "../exercises/02";

describe("palindrome word", () => {
  test("should return true", () => {
    const result = isPalindrome("Ana");

    expect(result).toBe(true);
  });

  test("should return false", () => {
    const result = isPalindrome("Joustin");

    expect(result).toBe(false);
  });
});
