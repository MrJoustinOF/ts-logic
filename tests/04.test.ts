import { backwardsOf } from "../exercises/04";

describe("backwards word", () => {
  test("should be the same but in lowercase", () => {
    const backwards = backwardsOf("Joustin");

    expect(backwards).toBe("nitsuoj");
  });

  test("should be exactly the same", () => {
    const backwards = backwardsOf("Joustin", true);

    expect(backwards).toBe("nitsuoJ");
  });
});
