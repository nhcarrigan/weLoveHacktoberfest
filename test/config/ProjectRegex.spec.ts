import { assert } from "chai";

import { ProjectRegex } from "../../src/config/ProjectRegex";

suite.only("ProjectRegex", () => {
  test("should match a GitHub repository link", () => {
    assert.match(
      "Check out my project: https://github.com/nhcarrigan/weLoveHacktoberfest",
      ProjectRegex
    );
  });

  test("should match a GitLab repository link", () => {
    assert.match(
      "Check out my project: https://gitlab.com/gitlab-org/gitlab",
      ProjectRegex
    );
  });

  test("should match a GitHub issue link", () => {
    assert.match(
      "Check out my project: https://github.com/nhcarrigan/weLoveHacktoberfest/issues/1",
      ProjectRegex
    );
  });

  test("should match a GitLab issue link", () => {
    assert.match(
      "Check out my project: https://gitlab.com/gitlab-org/gitlab/-/issues/1",
      ProjectRegex
    );
  });

  test("should not match a GitHub user link", () => {
    assert.notMatch(
      "Check out my projects: https://github.com/naomi-lgbt",
      ProjectRegex
    );
  });

  test("should not match a GitLab user link", () => {
    assert.notMatch(
      "Check out my projects: https://gitlab.com/hacktoberfest",
      ProjectRegex
    );
  });

  test("should not allow a GitHub Org link", () => {
    assert.notMatch(
      "Check out my projects: https://github.com/orgs/nhcarrigan",
      ProjectRegex
    );
  });

  test("should not match a non-project link", () => {
    assert.notMatch("Check out my project: https://naomi.lgbt", ProjectRegex);
  });

  test("should not match when a message has no link", () => {
    assert.notMatch("This is a message with no link", ProjectRegex);
  });
});
