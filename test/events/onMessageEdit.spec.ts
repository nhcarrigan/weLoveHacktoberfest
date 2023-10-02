import { assert } from "chai";

import { onMessageEdit } from "../../src/events/onMessageEdit";

suite("onMessageEdit event", () => {
  test("is defined", () => {
    assert.isDefined(onMessageEdit);
  });
});
