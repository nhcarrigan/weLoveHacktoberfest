import axios from "axios";
import { assert } from "chai";

import { hearts } from "../src/data/hearts";
import { tags } from "../src/data/tags";

suite("Data Validation", () => {
  suite("Tags Validation", () => {
    const tagNames = tags.map((el) => el.name);
    tags.forEach((tag) => {
      tagNames.push(...tag.aliases);
    });
    for (const tag of tags) {
      test(`${tag.name} should be unique`, () => {
        assert.equal(
          tagNames.indexOf(tag.name),
          tagNames.lastIndexOf(tag.name),
          `${tag.name} is not unique!`
        );
      });

      test(`${tag.name} should be lowercase`, () => {
        assert.equal(
          tag.name,
          tag.name.toLowerCase(),
          `${tag.name} is not lowercase!`
        );
      });

      test(`${tag.name} should have content`, () => {
        assert.notEqual(tag.content, "");
      });

      test(`${tag.name} should have content less than 4000 characters`, () => {
        assert.isAtMost(
          tag.content.length,
          4000,
          `${tag.name} content is too long!`
        );
      });

      test(`${tag.name} should ahve title less than 256 characters`, () => {
        assert.isAtMost(
          tag.title.length,
          256,
          `${tag.name} title is too long!`
        );
      });

      test(`${tag.name} title should be a question`, () => {
        assert(
          tag.title.endsWith("?"),
          `${tag.name} title does not appear to be a question`
        );
      });

      for (const alias of tag.aliases) {
        test(`${tag.name} should have unique aliases`, () => {
          assert.equal(
            tagNames.indexOf(alias),
            tagNames.lastIndexOf(alias),
            `${alias} is not unique!`
          );
        });
      }
    }

    test("Tags should be alphabetical", () => {
      assert.deepEqual(tagNames, tagNames.sort(), "Tags are not sorted!");
    });
  });

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
});
