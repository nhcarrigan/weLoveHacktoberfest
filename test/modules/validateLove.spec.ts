import { assert } from "chai";

import { validateLove } from "../../src/modules/validateLove";

suite("validateLove module", () => {
  test("is defined", () => {
    assert.isDefined(validateLove);
  });
});
