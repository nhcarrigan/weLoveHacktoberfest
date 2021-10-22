import { assert } from "chai";

import { tags } from "../src/data/tags";

suite("Data Validation", () => {
  suite("Tags Validation", () => {
    const tagNames = tags.map((el) => el.name);
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
    }
  });
});
