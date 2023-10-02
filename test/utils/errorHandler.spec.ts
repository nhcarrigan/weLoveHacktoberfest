import { assert } from "chai";

import { errorHandler } from "../../src/utils/errorHandler";

suite("errorHandler util", () => {
  test("is defined", () => {
    assert.isDefined(errorHandler);
  });
});
