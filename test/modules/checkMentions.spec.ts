import { assert } from "chai";

import { checkMentions } from "../../src/modules/checkMentions";

suite("checkMentions module", () => {
  test("returns true when id is present", () => {
    assert.isTrue(
      checkMentions(
        { content: "465650873650118659" } as never,
        "465650873650118659"
      )
    );
  });

  test("returns true when id is in mentions", () => {
    assert.isTrue(
      checkMentions(
        { content: "<@465650873650118659>" } as never,
        "465650873650118659"
      )
    );
  });

  test("returns true when id is in mentions with '!'", () => {
    assert.isTrue(
      checkMentions(
        { content: "<@!465650873650118659>" } as never,
        "465650873650118659"
      )
    );
  });

  test("returns false otherwise", () => {
    assert.isFalse(
      checkMentions({ content: "Beep Boop" } as never, "465650873650118659")
    );
  });
});
