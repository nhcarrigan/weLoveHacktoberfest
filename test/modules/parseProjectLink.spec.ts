import { assert } from "chai";

import { ProjectRegexString } from "../../src/config/ProjectRegex";
import { parseProjectLink } from "../../src/modules/parseProjectLink";

suite("parseProjectLink", () => {
  test("should parse from link at beginning of message", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse at end of string", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This is a really cool project: https://github.com/nhcarrigan/weLoveHacktoberfest".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse in middle of string", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This repo https://github.com/nhcarrigan/weLoveHacktoberfest is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse with new lines", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This repo\nhttps://github.com/nhcarrigan/weLoveHacktoberfest\nis really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a suppressed link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This repo <https://github.com/nhcarrigan/weLoveHacktoberfest> is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a Markdown link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This [repo](https://github.com/nhcarrigan/weLoveHacktoberfest) is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a suppressed Markdown link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "This [repo](<https://github.com/nhcarrigan/weLoveHacktoberfest>) is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a link followed by a period", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "Check out my repo: https://github.com/nhcarrigan/weLoveHacktoberfest. It is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a link followed by a comma", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "You can contribute at https://github.com/nhcarrigan/weLoveHacktoberfest, it is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a GitHub repository link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "You can contribute at https://github.com/nhcarrigan/weLoveHacktoberfest, it is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a GitLab repository link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://gitlab.com/gitlab-org/gitlab".match(ProjectRegex);
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "gitlab",
      owner: "gitlab-org"
    });
  });

  test("should parse a GitHub issue link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest/issues/1".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should parse a GitLab issue link", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches = "https://gitlab.com/gitlab-org/gitlab/-/issues/1".match(
      ProjectRegex
    );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "gitlab",
      owner: "gitlab-org"
    });
  });

  test("should parse multiple links", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/naomi-lgbt/naomi-lgbt.github.io and https://github.com/beccalyria/discord-bot are both looking for contributions! Check out our [docs](https://contribute.nhcarrigan.com)".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "naomi-lgbt.github.io",
      owner: "naomi-lgbt"
    });
    assert.deepEqual(parseProjectLink(matches?.[1] || ""), {
      repo: "discord-bot",
      owner: "beccalyria"
    });
  });

  test("should match a link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "https://github.com/nhcarrigan/weLoveHacktoberfest/ is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should match a suppressed link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "<https://github.com/nhcarrigan/weLoveHacktoberfest/> is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should match a Markdown link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "[my project](https://github.com/nhcarrigan/weLoveHacktoberfest/) is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });

  test("should match a suppressed Markdown link with a trailing slash", () => {
    const ProjectRegex = new RegExp(ProjectRegexString, "mig");
    const matches =
      "[my project](<https://github.com/nhcarrigan/weLoveHacktoberfest/>) is really cool.".match(
        ProjectRegex
      );
    assert.deepEqual(parseProjectLink(matches?.[0] || ""), {
      repo: "weLoveHacktoberfest",
      owner: "nhcarrigan"
    });
  });
});
