import { assert } from "chai";

import { onInteraction } from "../../src/events/onInteractionCreate";

suite("onInteractionCreate event", () => {
  test("is defined", () => {
    assert.isDefined(onInteraction);
  });
});
