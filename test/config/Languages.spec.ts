import { assert } from "chai";

import {
  LanguageChoices,
  LanguageColours,
  GitLabLanguageIds,
} from "../../src/config/Languages";

suite("LanguageChoices", () => {
  test("is defined", () => {
    assert.isDefined(LanguageChoices);
  });
});

suite("LanguageColours", () => {
  test("is defined", () => {
    assert.isDefined(LanguageColours);
  });
});

suite("GitLabLanguageIds", () => {
  test("is defined", () => {
    assert.isDefined(GitLabLanguageIds);
  });
});
