import { Tag } from "../interfaces/Tag";

export const tags: Tag[] = [
  {
    answer:
      "You don't. There's no way to tell which repos have been excluded. However, repos [are not arbitrarily excluded](https://hacktoberfest.com/participation/#spam). Simplistic repos, list repos, collection repos, and DSA repos are some examples of repos that generally get excluded, though exceptions can (very rarely) apply.",
    question: "How do I check if a repo has been excluded?",
  },
  {
    answer:
      "You can contribute to any repo with the hacktoberfest label, or repos using the `hacktoberfest-accepted` label on individual PRs/MRs. You can find these by searching on either [GitHub](https://github.com/topics/hacktoberfest) or [GitLab](https://gitlab.com/explore/projects/topics/hacktoberfest).\n\nYou can contribute both code and low-code. See also [GitHub's guide](https://opensource.guide/how-to-contribute/) for contributing if you're not sure how. The [Hacktoberfest website](https://hacktoberfest.com/participation/#contributors) also contains some resources to help you get started.",
    question: "How do I contribute?",
  },
  {
    answer:
      "Hacktoberfest starts on the 1st of October and ends on October 31st. PRs created before October 1st, or after October 31st, do not count.",
    question: "When does Hacktoberfest start?",
  },
  {
    answer:
      "You have had 2 or more PRs/MRs labelled with `spam` and have been disqualified from participating in Hacktoberfest.\n\nThe Hacktoberfest team cannot control how maintainers choose to label your contributions, and as such we cannot offer support here. You can politely ask the maintainer to remove the labels, but ultimately it is their choice. Please do not harass maintainers.\n\nIf the maintainer chooses to remove the label, let us know so we can re-evaluate your Hacktoberfest account. Note that PRs/MRs labelled with `invalid` will not count toward disqualification, but will also not count toward your Hacktoberfest progress.",
    question:
      "I have four completed PRs. Why don't I see the confirmation screen?",
  },
  {
    answer:
      "To quote <@!541305895544422430>:\n> I've said it before, and I'll say it again, y'all really don't need to worry about the exact time it all starts. You've got the whole month to get your PRs submitted.",
    question: "What's the exact time I can start making PRs?",
  },
  {
    answer: `An "Excluded Project" is a repository which has been blocked by the Hacktoberfest team for being "cheaty" or "spammy".\n\nHacktoberfest is about making valuable contributions to open source, not adding a random algorithm, to a folder, adding a name or similar to "win".\n\nWe recommend searching for things that you use (Such as freeCodeCamp, Notion, zsh or a lot more!). You can also search <#735506115810426971> - we try to keep this clean of all cheaty repos.\n\nYou can read more about what Hacktoberfest is doing to reduce spam at <https://hacktoberfest.digitalocean.com/resources#reduce-spam>.\n\nFound a repo that you think doesn't follow the values? Report it at <https://hacktoberfest.digitalocean.com/report>.`,
    question: "Why does my PR say 'Excluded Project'?",
  },
  {
    answer:
      "The Hacktoberfest community is successful, in part, due to the efforts of the helpers to keep things safe and welcoming. Helpers not only moderate the community, but answer your questions and help you in your efforts to contribute to open source. Our valued helpers are:\n\n- [Matt](https://mattcowley.co.uk/)\n- [LukeOCodes](https://github.com/lukeocodes/)\n- [Naomi](https://naomi.lgbt)\n- [Walshy](https://walshy.dev/)",
    question: "What is a helper?",
  },
  {
    answer:
      "Want to find a project with a specific language to contribute to?\n\nYou can use this link to find hacktoberfest repos in a language of your choice: `https://github.com/topics/hacktoberfest?l=<<change_this_to_language>>`. Don't forget to replace `<<change_this_to_language>>` with the language you want to search for.\n\nAs an example, if you want to find JavaScript projects, you'd use: [https://github.com/topics/hacktoberfest?l=javascript](https://github.com/topics/hacktoberfest?l=javascript). You can also use the `/search` command.",
    question: "How do I find projects in specific languages to Contribute to?",
  },
  {
    answer: `The seven day "matures" period begins after your PR is approved/merged, and is the Hacktoberfest review period. There is nothing wrong with your PR, you just need to be patient for the 7 days to pass.`,
    question: "Why does my PR say 'Matures in 7 days'?",
  },
  {
    answer:
      "Yes. There are no requirements or rules for who has to own the repository.\n\nHowever, you're still encouraged to contribute to other repositories rather than, or in addition to, your own repositories.",
    question: "Do PRs/MRs to my own repo or a repo I'm a maintainer of count?",
  },
  {
    answer:
      "If your profile isn't showing any PRs, try hard-refreshing the page.\n\nUpdates to the state of your PRs can take around 15 minutes on average. If your PR was merged and hasn't updated on the website immediately, don't panic! Your contributions will be counted on the next update. 🙂",
    question: "Why is my PR not showing up on my profile?",
  },
  {
    answer:
      "Any project with the `hacktoberfest` topic is considered to be participating in Hacktoberfest.\n\nYou can search for these both on [GitHub](https://github.com/topics/hacktoberfest) and [GitLab](https://gitlab.com/explore/projects?topic=hacktoberfest).\n\nWe also recommend taking a look at <#735506115810426971> as folks share their projects there. You can also use the `/search` command to generate query links for a specific language.",
    question: "Where do I find projects to contribute to?",
  },
  {
    answer:
      "```\nPRs/MRs count if:\nSubmitted during the month of October AND (\n  The PR/MR is labelled as hacktoberfest-accepted by a maintainer OR\n  Submitted in a repo with the hacktoberfest topic AND (\n    The PR/MR is merged OR\n    The PR/MR has been approved\n  )\n)\n```",
    question: "How does a PR/MR count for Hacktoberfest?",
  },
  {
    answer:
      "You need four PRs/MRs accepted between October 1 and October 31 to complete Hacktoberfest",
    question: "How many PRs/MRs do I need?",
  },
  {
    answer: "Hacktoberfest is not offering shirts or physical swag this year.",
    question: "Are there still shirts left?",
  },
  {
    answer: "Yes, Hacktoberfest has started.",
    question: "Has Hacktoberfest started?",
  },
  {
    answer: "Hacktoberfest is not offering shirts or physical swag this year.",
    question: "How do I track my swag?",
  },
  {
    answer: "Oh hello uwu",
    question: "UWU?",
  },
  {
    answer:
      "Hacktoberfest doesn't have any winners or losers. Positive contributions to the open-source community is a win for everyone",
    question: "Can I/how do I win Hacktoberfest?",
  },
  {
    answer:
      "You have to opt-in via email for Holopin badges. If you opted in, make sure that the email did not land in your spam folder. Also, be sure that you opted in with the correct email address (not the GitHub no-reply email address). Finally, you should also see a `Claim Now` link in your Hacktoberfest profile.",
    question: "Why aren't my Holopin badges showing up?",
  },
  {
    answer:
      "As long as your PR/MR is approved, merged, or given the `hacktoberfest-accepted` label before October ends, it can be eligible for Hacktoberfest. The maturation period might extend into November, but that will not prevent your contribution from being counted.",
    question:
      "Will my PR/MR still be eligible, even if October is almost done?",
  },
  {
    answer:
      "Maintainer activities are not tracked. Additionally, there are no rewards for maintainer activity this year. Only 4 completed PR/MRs will be tracked.",
    question: "How do I track my maintainer activity?",
  },
  {
    answer:
      "We do not typically accept appeals for spam-based disqualification. You may politely ask the maintainer to remove the `spam` label, but it is their choice. Please do not harass maintainers. If the maintainer chooses to remove the label, let us know so we can re-evaluate your Hacktoberfest account.",
    question: "How do I appeal my account being disqualified?",
  },
  {
    answer:
      "To quote <@!465650873650118659>:\n> Look y'all, we don't have the time to sit here and play 'is this eligible or not'.\n\nHere's some guidelines:\n- Pick an actual project. If it's designed to help you find quick and easy PRs just to 'win' hacktoberfest, move on.\n- If you PR to a project that isn't eligible, who cares? That just means it won't count toward your 4 PRs. As long as your **PR itself** isn't labelled spam, there's no issue.",
    question: "Is this specific project eligible?",
  },
];
