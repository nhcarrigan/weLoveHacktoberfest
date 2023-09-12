import { assert } from "chai";

import { ProjectRegex } from "../../src/config/ProjectRegex";

suite("ProjectRegex", () => {
  test("should match at beginning of message", () => {
    assert.isTrue(
      ProjectRegex.test(
        "https://github.com/nhcarrigan/weLoveHacktoberfest is really cool."
      )
    );
  });

  test("should match at end of string", () => {
    assert.isTrue(
      ProjectRegex.test(
        "This is a really cool project: https://github.com/nhcarrigan/weLoveHacktoberfest"
      )
    );
  });

  test("should match in middle of string", () => {
    assert.isTrue(
      ProjectRegex.test(
        "This repo https://github.com/nhcarrigan/weLoveHacktoberfest is really cool."
      )
    );
  });

  test("should match with new lines", () => {
    assert.isTrue(
      ProjectRegex.test(
        "This repo\nhttps://github.com/nhcarrigan/weLoveHacktoberfest\nis really cool."
      )
    );
  });

  test("should match a suppressed link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "This repo <https://github.com/nhcarrigan/weLoveHacktoberfest> is really cool."
      )
    )
  });

  test("should match a Markdown link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "This [repo](https://github.com/nhcarrigan/weLoveHacktoberfest) is really cool."
      )
    )
  });

  test("should match a suppressed Markdown link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "This [repo](<https://github.com/nhcarrigan/weLoveHacktoberfest>) is really cool."
      )
    )
  });

  test("should match a GitHub repository link", () => {
    assert.isTrue(
      ProjectRegex.test("https://github.com/nhcarrigan/weLoveHacktoberfest")
    );
  });

  test("should match a GitLab repository link", () => {
    assert.isTrue(ProjectRegex.test("https://gitlab.com/gitlab-org/gitlab"));
  });

  test("should match a GitHub issue link", () => {
    assert.isTrue(
      ProjectRegex.test(
        "https://github.com/nhcarrigan/weLoveHacktoberfest/issues/1"
      )
    );
  });

  test("should match a GitLab issue link", () => {
    assert.isTrue(
      ProjectRegex.test("https://gitlab.com/gitlab-org/gitlab/-/issues/1")
    );
  });

  test("should not match a GitHub user link", () => {
    assert.isFalse(ProjectRegex.test("https://github.com/naomi-lgbt"));
  });

  test("should not match a GitLab user link", () => {
    assert.isFalse(ProjectRegex.test("https://gitlab.com/hacktoberfest"));
  });

  test("should not allow a GitHub Org link", () => {
    assert.isFalse(ProjectRegex.test("https://github.com/orgs/nhcarrigan"));
  });

  test("should not match a non-project link", () => {
    assert.isFalse(ProjectRegex.test("https://google.com"));
  });

  test("should not match when a message has no link", () => {
    assert.isFalse(ProjectRegex.test("This is a message with no link"));
  });

  test("should not match file links", () => {
    assert.isFalse(
      ProjectRegex.test(
        "https://github.com/nhcarrigan/weLoveHacktoberfest/blob/0564dbe3abaa047eefe0a294fa09377ace59225d/package.json"
      )
    );
    assert.isFalse(
      ProjectRegex.test(
        "https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab-ci.yml"
      )
    );
  });
});
