import axios from "axios";
import { assert } from "chai";

import { hearts } from "../../src/data/hearts";

suite("Hearts should be valid", () => {
  for (const heart of hearts) {
    test(`${heart} is valid`, async () => {
      const result = await axios.head(
        `https://raw.githubusercontent.com/lukeocodes/dev-hearts/main/build/${heart}.png`
      );
      assert.equal(result.status, 200, `${heart} is not valid!`);
    });
  }
});
