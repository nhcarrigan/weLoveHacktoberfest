import { assert } from "chai";

import { loveData } from "../../src/data/loveData";
import { validateLove } from "../../src/modules/validateLove";

suite("validateLove module", () => {
  const data = loveData.find((d) => d.name === "Naomi") as never;
  test("returns true for a name", () => {
    assert.isTrue(validateLove({ content: "Naomi" } as never, data));
  });

  test("returns true for emoji", () => {
    assert.isTrue(validateLove({ content: "N A O M I" } as never, data));
  });

  test("returns true for an author", () => {
    assert.isTrue(
      validateLove(
        {
          content: "Beep Boop",
          author: { id: "465650873650118659" } as never
        } as never,
        data
      )
    );
  });

  test("returns true for an id mention", () => {
    assert.isTrue(
      validateLove(
        { author: { id: "erin" }, content: "<@465650873650118659>" } as never,
        data
      )
    );
  });

  test("returns false otherwise", () => {
    assert.isFalse(validateLove({ content: "Beep Boop" } as never, data));
  });
});
