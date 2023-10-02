import { assert } from "chai";

import { loadCommands } from "../../src/utils/loadCommands";

suite("loadCommands util", () => {
  test("is defined", () => {
    assert.isDefined(loadCommands);
  });
});
