import { assert } from "chai";

import { faq } from "../../src/commands/faq";

suite("faq command", () => {
  test("is defined", () => {
    assert.isDefined(faq);
  });
});
