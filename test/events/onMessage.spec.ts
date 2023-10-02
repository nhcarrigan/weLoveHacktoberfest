import { assert } from "chai";

import { onMessage } from "../../src/events/onMessage";

suite("onMessage event", () => {
  test("is defined", () => {
    assert.isDefined(onMessage);
  });
});
