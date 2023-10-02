import { assert } from "chai";

import { onReady } from "../../src/events/onReady";

suite("onReady event", () => {
  test("is defined", () => {
    assert.isDefined(onReady);
  });
});
