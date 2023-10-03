import { assert } from "chai";

import { isInDatabase } from "../../src/modules/isInDatabase";
import { Database } from "../__mocks__/Database.mock";

const db = new Database();

const opts = {
  repo: "test",
  owner: "test",
  userId: "test"
};

suite("isInDatabase module", () => {
  test("returns false when not in database", async () => {
    assert.isFalse(await isInDatabase({ db } as never, opts));
  });

  test("returns true when inside of cooldown", async () => {
    assert.isTrue(await isInDatabase({ db } as never, opts));
  });

  test("returns false when outside of cooldown", async () => {
    await db.links.update({
      where: {
        userId_repo_owner: opts
      },
      data: {
        lastSent: new Date(0)
      }
    });
    assert.isFalse(await isInDatabase({ db } as never, opts));
  });
});
