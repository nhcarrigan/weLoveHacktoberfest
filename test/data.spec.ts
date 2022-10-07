import axios from "axios";
import { assert } from "chai";

import { hearts } from "../src/data/hearts";
import { tags } from "../src/data/tags";

suite("Data Validation", () => {
  suite("Tags Validation", () => {
    const tagNames = tags.map((el) => el.question);
    for (const tag of tags) {
      test(`${tag.question} should be unique`, () => {
        assert.equal(
          tagNames.indexOf(tag.question),
          tagNames.lastIndexOf(tag.question),
          `${tag.question} is not unique!`
        );
      });

      test(`${tag.question} should have answer`, () => {
        assert.notEqual(tag.answer, "");
      });

      test(`${tag.question} should have answer less than 4000 characters`, () => {
        assert.isAtMost(
          tag.answer.length,
          4000,
          `${tag.answer} content is too long!`
        );
      });

      test(`${tag.question} should have question less than 256 characters`, () => {
        assert.isAtMost(
          tag.question.length,
          256,
          `${tag.question} title is too long!`
        );
      });

      test(`${tag.question} question should be a question`, () => {
        assert(
          tag.question.endsWith("?"),
          `${tag.question} title does not appear to be a question`
        );
      });
    }
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
