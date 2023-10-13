import { assert } from "chai";

import { ProjectRegexString } from "../../src/config/ProjectRegex";
import { RegressionsFromProduction } from "../__statics__/RegexRegressions";

suite("ProjectRegex", () => {
  test("should match at beginning of message", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match at end of string", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This is a really cool project: https://github.com/nhcarrigan/weLoveHacktoberfest".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match in middle of string", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This repo https://github.com/nhcarrigan/weLoveHacktoberfest is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match with new lines", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This repo\nhttps://github.com/nhcarrigan/weLoveHacktoberfest\nis really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a suppressed link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This repo <https://github.com/nhcarrigan/weLoveHacktoberfest> is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a Markdown link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This [repo](https://github.com/nhcarrigan/weLoveHacktoberfest) is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a suppressed Markdown link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This [repo](<https://github.com/nhcarrigan/weLoveHacktoberfest>) is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a link followed by a period", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "Check out my repo: https://github.com/nhcarrigan/weLoveHacktoberfest. It is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a link followed by a comma", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "You can contribute at https://github.com/nhcarrigan/weLoveHacktoberfest, it is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a GitHub repository link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "You can contribute at https://github.com/nhcarrigan/weLoveHacktoberfest, it is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a GitLab repository link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://gitlab.com/gitlab-org/gitlab".match(ProjectRegex);
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a single GitHub issue link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest/issues/1".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a single GitLab issue link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://gitlab.com/gitlab-org/gitlab/-/issues/1".match(
      ProjectRegex
    );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a GitHub issue page link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest/issues".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a GitLab issue page link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://gitlab.com/gitlab-org/gitlab/-/issues".match(
      ProjectRegex
    );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should not match a GitHub user link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://github.com/naomi-lgbt".match(ProjectRegex);
    assert.isNull(matches);
  });

  test("should not match a GitLab user link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://gitlab.com/hacktoberfest".match(ProjectRegex);
    assert.isNull(matches);
  });

  test("should not allow a GitHub Org link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://github.com/orgs/nhcarrigan".match(ProjectRegex);
    assert.isNull(matches);
  });

  test("should not match a non-project link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://google.com".match(ProjectRegex);
    assert.isNull(matches);
  });

  test("should not match when a message has no link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "This is a message with no link".match(ProjectRegex);
    assert.isNull(matches);
  });

  test("should not match file links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest/blob/0564dbe3abaa047eefe0a294fa09377ace59225d/package.json".match(
        ProjectRegex
      );
    const matches2 =
      "https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab-ci.yml".match(
        ProjectRegex
      );
    assert.isNull(matches);
    assert.isNull(matches2);
  });

  test("should match multiple links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/naomi-lgbt/naomi-lgbt.github.io and https://github.com/beccalyria/discord-bot are both looking for contributions! Check out our [docs](https://contribute.nhcarrigan.com)".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 2);
  });

  test("should match multiple links with no separations", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/naomi-lgbt/naomi-lgbt.github.io https://github.com/beccalyria/discord-bot are both looking for contributions! Check out our [docs](https://contribute.nhcarrigan.com)".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 2);
  });
});

suite("project regex REGRESSIONS", () => {
  test("should match a link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest/ is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a suppressed link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "<https://github.com/nhcarrigan/weLoveHacktoberfest/> is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a Markdown link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "[my project](https://github.com/nhcarrigan/weLoveHacktoberfest/) is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match a suppressed Markdown link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "[my project](<https://github.com/nhcarrigan/weLoveHacktoberfest/>) is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match italic links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "*https://github.com/nhcarrigan/weLoveHacktoberfest* is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match bold links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "*https://github.com/nhcarrigan/weLoveHacktoberfest* is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match underlined links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "__https://github.com/nhcarrigan/weLoveHacktoberfest__ is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match strikethrough links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "~~https://github.com/nhcarrigan/weLoveHacktoberfest~~ is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match hella markdown", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "__***[My Project](<https://github.com/nhcarrigan/weLoveHacktoberfest>)__*** is really cool.".match(
        ProjectRegex
      );
    assert.isNotNull(matches);
    assert.lengthOf(matches as RegExpMatchArray, 1);
  });

  test("should match regression messages", () => {
    for (const regression of RegressionsFromProduction) {
      const ProjectRegex = new RegExp(ProjectRegexString, "mig");
      const matches = regression.match(ProjectRegex);
      assert.isNotNull(matches);
      assert.lengthOf(matches as RegExpMatchArray, 1);
    }
  });
});
