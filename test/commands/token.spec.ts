import { assert } from "chai";

import { token } from "../../src/commands/token";

suite("token command", () => {
  test("is defined", () => {
    assert.isDefined(token);
  });
});
