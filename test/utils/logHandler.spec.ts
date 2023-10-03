import { assert } from "chai";

import { logHandler } from "../../src/utils/logHandler";

suite("logHandler util", () => {
  test("is defined", () => {
    assert.isDefined(logHandler);
  });
});
