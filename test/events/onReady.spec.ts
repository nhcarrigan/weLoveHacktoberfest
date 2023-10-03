import { assert } from "chai";

import { onReady } from "../../src/events/onReady";

suite.only("onReady event", () => {
  test("should not throw", () => {
    test("should not error", () => {
      assert.doesNotThrow(() => onReady({} as never));
    });
  });
});
