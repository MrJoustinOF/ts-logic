import { drawSquare } from "../exercises/06";

describe("square", () => {
  test("should return an string with aterisks and spaces", () => {
    const square = drawSquare(3);

    expect(square).toBe("***\n* *\n***\n");
  });
});
