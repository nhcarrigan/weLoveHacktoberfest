export const boundaryStart = "(?:^|[ \t\n<(])";
export const boundaryEnd = "\\/?(?:$|[ \t\n>),.])";
export const protocol = "(?:https?:\\/\\/)?";
export const www = "(?:www\\.)?";
// credit: https://github.com/shinnn/github-username-regex
export const githubUsername =
  "(?!orgs)[a-z\\d](?:[a-z\\d]|-(?=[a-z\\d])){0,38}";
export const gitlabUsername = "[a-z\\d](?:[a-z\\d]|-(?=[a-z\\d])){1,254}";
export const repo = "[a-z\\d\\-\\._]{1,}";
export const optionalIssues = "(?:\\/(?:-\\/)?issues\\/\\d+)?";

export const githubPath = `${githubUsername}\\/${repo}${optionalIssues}`;
export const gitlabPath = `${gitlabUsername}\\/${repo}${optionalIssues}`;

export const ProjectRegexString = `${boundaryStart}${protocol}${www}(?:github\\.com/${githubPath}|gitlab\\.com/${gitlabPath})${boundaryEnd}`;
