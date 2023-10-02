import { assert } from "chai";

import { getRandom } from "../../src/modules/getRandom";

suite("getRandom module", () => {
  test("is defined", () => {
    assert.isDefined(getRandom);
  });
});
