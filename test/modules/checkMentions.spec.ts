import { assert } from "chai";

import { checkMentions } from "../../src/modules/checkMentions";

suite("checkMentions module", () => {
  test("is defined", () => {
    assert.isDefined(checkMentions);
  });
});
