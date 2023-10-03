import { assert } from "chai";

import { loveData } from "../../src/data/loveData";

suite("loveData", () => {
  test("should be unique", () => {
    const set = new Set(loveData.map((data) => data.name));
    assert.lengthOf(loveData, set.size, "loveData are not unique!");
  });
});
