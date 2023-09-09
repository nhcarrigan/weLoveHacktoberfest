import { assert } from "chai";

import { ProjectRegex } from "../../src/config/ProjectRegex";

suite("ProjectRegex", () => {
  test("should match a GitHub repository link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "Check out my project: https://github.com/nhcarrigan/weLoveHacktoberfest"
      )
    );
  });

  test("should match a GitLab repository link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "Check out my project: https://gitlab.com/gitlab-org/gitlab"
      )
    );
  });

  test("should match a GitHub issue link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "Check out my project: https://github.com/nhcarrigan/weLoveHacktoberfest/issues/1"
      )
    );
  });

  test("should match a GitLab issue link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "Check out my project: https://gitlab.com/gitlab-org/gitlab/-/issues/1"
      )
    );
  });

  test("should not match a GitHub user link", () => {
    assert.isFalse(
      ProjectRegex.test("Check out my project: https://github.com/naomi-lgbt")
    );
  });

  test("should not match a GitLab user link", () => {
    assert.isFalse(
      ProjectRegex.test(
        "Check out my project: https://gitlab.com/hacktoberfest"
      )
    );
  });

  test("should not allow a GitHub Org link", () => {
    assert.isFalse(
      ProjectRegex.test(
        "Check out my project: https://github.com/orgs/nhcarrigan"
      )
    );
  });

  test("should not match a non-project link", () => {
    assert.isFalse(
      ProjectRegex.test("Check out my project: https://google.com")
    );
  });

  test("should not match when a message has no link", () => {
    assert.isFalse(ProjectRegex.test("This is a message with no link"));
    assert.notMatch("This is a message with no link", ProjectRegex);
  });
});
