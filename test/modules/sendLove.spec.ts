import { assert } from "chai";

import { sendLove } from "../../src/modules/sendLove";

suite("sendLove module", () => {
  test("is defined", () => {
    assert.isDefined(sendLove);
  });
});
