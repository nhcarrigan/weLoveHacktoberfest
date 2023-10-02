import { assert } from "chai";

import { search } from "../../src/commands/search";

suite("search command", () => {
  test("is defined", () => {
    assert.isDefined(search);
  });
});
