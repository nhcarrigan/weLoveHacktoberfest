const boundaryStart = "(?:^|[ \t\n<(])";
const boundaryEnd = "(?:$|[ \t\n>)])";
const protocol = "(?:https?:\\/\\/)?";
const www = "(?:www\\.)?";
// credit: https://github.com/shinnn/github-username-regex
const githubUsername = "(?!orgs)[a-z\\d](?:[a-z\\d]|-(?=[a-z\\d])){0,38}";
const gitlabUsername = "[a-z\\d](?:[a-z\\d]|-(?=[a-z\\d])){1,254}";
const repo = "[a-z\\d\\-\\._]{1,}";
const optionalIssues = "(?:\\/(?:-\\/)?issues\\/\\d+)?";

const githubPath = `${githubUsername}\\/${repo}${optionalIssues}`;
const gitlabPath = `${gitlabUsername}\\/${repo}${optionalIssues}`;

export const ProjectRegex = new RegExp(
  `${boundaryStart}${protocol}${www}(?:github\\.com/${githubPath}|gitlab\\.com/${gitlabPath})${boundaryEnd}`,
  "mi"
);
