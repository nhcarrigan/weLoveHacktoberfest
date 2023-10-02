import { assert } from "chai";

import { checkProject } from "../../src/modules/checkProject";

suite("checkProject module", () => {
  test("is defined", () => {
    assert.isDefined(checkProject);
  });
});
