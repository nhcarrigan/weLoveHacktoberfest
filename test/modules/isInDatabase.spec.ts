import { assert } from "chai";

import { isInDatabase } from "../../src/modules/isInDatabase";

suite("isInDatabase module", () => {
  test("is defined", () => {
    assert.isDefined(isInDatabase);
  });
});
