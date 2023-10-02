import { assert } from "chai";

import { holopin } from "../../src/commands/holopin";

suite("holopin command", () => {
  test("is defined", () => {
    assert.isDefined(holopin);
  });
});
