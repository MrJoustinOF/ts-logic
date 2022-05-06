import { backwardsNumber } from "../exercises/08";

describe("backwards number", () => {
  test("should be 4001", () => {
    const backwards = backwardsNumber(1004);

    expect(backwards).toBe(4001);
  });
});
