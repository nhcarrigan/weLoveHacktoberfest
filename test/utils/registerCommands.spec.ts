import { assert } from "chai";

import { registerCommands } from "../../src/utils/registerCommands";

suite("registerCommands util", () => {
  test("is defined", () => {
    assert.isDefined(registerCommands);
  });
});
