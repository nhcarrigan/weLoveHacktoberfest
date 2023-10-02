import {
  boundaryEnd,
  boundaryStart,
  optionalIssues
} from "../config/ProjectRegex";

/**
 * Parses the repository and owner from a project link.
 *
 * @param {string} message The match content from the ProjectRegex.match call.
 * @returns {{ repo: string; owner: string }} The repository and owner.
 */
export const parseProjectLink = (
  message: string
): { repo: string; owner: string } => {
  const stripped = message
    .replace(new RegExp(`^${boundaryStart}`), "")
    .replace(new RegExp(`${boundaryEnd}$`), "")
    .replace(new RegExp(`${optionalIssues}$`), "")
    .replace(/\.$/, "")
    .replace(/\/$/, "");
  const split = stripped.split("/");
  const repo = split.pop();
  const owner = split.pop();
  return { repo: repo?.trim() || "", owner: owner?.trim() || "" };
};
