import { Tag } from "../interfaces/Tag";

export const tags: Tag[] = [
  {
    name: "contribute",
    content:
      "You can contribute to any repo with the hacktoberfest label, or repos using the `hacktoberfest-accepted` label on individual PRs/MRs. You can find these by searching on either [GitHub](https://github.com/topics/hacktoberfest) or [GitLab](https://gitlab.com/explore/projects/topics/hacktoberfest).\n\nYou can contribute both code and low-code. See also [GitHub's guide](https://opensource.guide/how-to-contribute/) for contributing if you're not sure how. The [Hacktoberfest website](https://hacktoberfest.com/participation/#contributors) also contains some resources to help you get started.",
    title: "How do I contribute?",
    aliases: ["contributors", "contributing"],
  },
  {
    name: "customs",
    content:
      "We write down a low enough dollar value on the mailed packages that we don't expect any issues with customs tax, but we cannot guarantee that - you might have to pay a small fee depending on your country's import policies. DigitalOcean and Kotis Design will not issue a refund for shipping/duty fees.",
    title: "Will I have to pay anything/custom tax/duty for the shirt?",
    aliases: ["fees", "taxes"],
  },
  {
    name: "dates",
    content:
      "Hacktoberfest starts on the 1st of October and ends on October 31st. PRs created before October 1st, or after October 31st, do not count.",
    title: "When does Hacktoberfest start?",
    aliases: ["start"],
  },
  {
    name: "disqualified",
    content:
      "You have had 2 or more PRs/MRs labelled with `spam` and have been disqualified from participating in Hacktoberfest.\n\nThe Hacktoberfest team cannot control how maintainers choose to label your contributions, and as such we cannot offer support here. You can politely ask the maintainer to remove the labels, but ultimately it is their choice. Please do not harass maintainers.\n\nIf the maintainer chooses to remove the label, let us know so we can re-evaluate your Hacktoberfest account. Note that PRs/MRs labelled with `invalid` will not count toward disqualification, but will also not count toward your Hacktoberfest progress.",
    title:
      "I have four completed PRs. Why don't I see the confirmation screen?",
    aliases: ["dq", "spam", "invalid", "spammy", "banned"],
  },
  {
    name: "exact-start",
    content:
      "To quote <@!541305895544422430>:\n> I've said it before, and I'll say it again, y'all really don't need to worry about the exact time it all starts. You've got the whole month to get your PRs submitted.",
    title: "What's the exact time I can start making PRs?",
    aliases: [],
  },
  {
    name: "excluded",
    content: `An "Excluded Project" is a repository which has been blocked by the Hacktoberfest team for being "cheaty" or "spammy".\n\nHacktoberfest is about making valuable contributions to open source, not adding a random algorithm, to a folder, adding a name or similar to get a free t-shirt.\n\nWe recommend searching for things that you use (Such as Freecodecamp, Notion, zsh or a lot more!). You can also search <#735506115810426971> we try to keep this clean of all cheaty repos.\n\nYou can read more about what Hacktoberfest is doing to reduce spam at <https://hacktoberfest.digitalocean.com/resources#reduce-spam>.\n\nFound a repo that you think doesn't follow the values? Report it at <https://hacktoberfest.digitalocean.com/report>.`,
    title: "Why does my PR say 'Excluded Project'?",
    aliases: [],
  },
  {
    name: "helpers",
    content:
      "The Hacktoberfest community is successful, in part, due to the efforts of the helpers to keep things safe and welcoming. Helpers not only moderate the community, but answer your questions and help you in your efforts to contribute to open source. Our valued helpers are:\n\n[Matt](https://mattcowley.co.uk/)\n[LukeOCodes](https://github.com/lukeocodes/)\n[Naomi](https://naomi.lgbt)\n[Walshy](https://walshy.dev/)",
    title: "What is a helper?",
    aliases: ["mods"],
  },
  {
    name: "language",
    content:
      "Want to find a project with a specific language to contribute to?\n\nUse the below to the language of your choice 👇,\nUse this link, and just change the last parameter!\n\n`https://github.com/topics/hacktoberfest?l=<<change_this_to_language>>`\n\nAs an example, if I wanted to find JS projects: [https://github.com/topics/hacktoberfest?l=javascript](https://github.com/topics/hacktoberfest?l=javascript)",
    title: "How do I find projects in specific languages to Contribute to?",
    aliases: ["languages"],
  },
  {
    name: "matures",
    content: `The seven day "matures" period begins after your PR is approved/merged, and is the Hacktoberfest review period. There is nothing wrong with your PR, you just need to be patient for the 7 days to pass.`,
    title: "Why does my PR say 'Matures in 7 days'?",
    aliases: [],
  },
  {
    name: "profile",
    content:
      "If your profile isn't showing any PRs, try hard-refreshing the page.\n\nUpdates to the state of your PRs can take around 15 minutes on average. If your PR was merged and hasn't updated on the website immediately, don't panic! Your contributions will be counted on the next update. 🙂",
    title: "Why is my PR not showing up on my profile?",
    aliases: ["noprs"],
  },
  {
    name: "projects",
    content:
      "Any project with the `hacktoberfest` topic is considered to be participating in Hacktoberfest.\n\nYou can search for these both on [GitHub](https://github.com/topics/hacktoberfest) and [GitLab](https://gitlab.com/explore/projects?topic=hacktoberfest).\n\nWe also recommend taking a look at <#735506115810426971> as folks share their projects there.",
    title: "Where do I find projects to contribute to?",
    aliases: ["repos"],
  },
  {
    name: "prs",
    content:
      "```\nPRs/MRs count if:\nSubmitted during the month of October AND (\n  The PR/MR is labelled as hacktoberfest-accepted by a maintainer OR\n  Submitted in a repo with the hacktoberfest topic AND (\n    The PR/MR is merged OR\n    The PR/MR has been approved\n  )\n)\n```",
    title: "How does a PR/MR count for Hacktoberfest?",
    aliases: ["pr", "mrs", "mr"],
  },
  {
    name: "pr-count",
    content:
      "You need four PRs/MRs accepted between October 1 and October 31 to complete Hacktoberfest",
    title: "How many PRs/MRs do I need?",
    aliases: ["mr-count", "count"],
  },
  {
    name: "shipfaster",
    content:
      "How to get your Hacktoberfest Swag faster:\n1. Go for a walk\n2. Wait a month, and perform the [Ritual of Cleansing](https://www.youtube.com/watch?v=zL19uMsnpSU)\n3. Realize there's more to life than waiting for a free t-shirt that may or may not arrive arrive soon\n4. Forget about the shirt\n5. Be surprised when your swag finally appears after you've completely forgotten the entire thing\n6. Thank <@541305895544422430> for being so awesome",
    title: "How do I get my swag faster?",
    aliases: [],
  },
  {
    name: "shipping",
    content:
      "We're working hard to get all the shirts shipped out, though this takes a while considering how many users have won and claimed a T-shirt. We hope to have all the swag shipped out over the next month, though given the global health pandemic we can't promise this\n\nThere is no order to the swag being shipped out, it is random -- there is not a specific country being shipped to first, there is not a specific color/type being shipped first, it is random. We kindly ask that you just have patience as we work hard to get it all shipped out.\n\nOnce your swag has been shipped you'll get an email from our swag provider, Kotis, with tracking information for your package! Please don't email us asking for tracking before you've got the email, it will automatically be sent to you when your swag gets shipped. Once shipped, delivery is expected to take between 8 - 12 weeks, though, again, given the global health pandemic things might be a bit slower than expected.",
    title: "Where is my swag?",
    aliases: ["swag"],
  },
  {
    name: "shirts",
    content:
      "👋 If you're worried about getting a shirt, don't worry! Shirts will likely be available well into the third week of the competition if not the whole way through. However, we never give out numbers for completions as we go, as it’d incentivise further spam and likely disincentivise legitimate contributions at a point.\n\nPlease keep in mind though that Hacktoberfest isn't just about getting a T-shirt, that is not the core aim for participating in Hacktoberfest. A T-shirt may be motivating to win, but Hacktoberfest is about learning and contributing to open source, doing good for the open-source community and helping projects out, not primarily about getting a free T-shirt.\n\nAlso, if you do win, you should really consider opt-ing to have a tree planted on your behalf in the Hacktoberfest Forest instead of claiming a T-shirt, we need to look after our climate!",
    title: "Are there still shirts left?",
    aliases: ["tees"],
  },
  {
    name: "started",
    content: "Yes, Hacktoberfest has started.",
    title: "Has Hacktoberfest started?",
    aliases: [],
  },
  {
    name: "track",
    content:
      "How to track your Hacktoberfest Swag:\n1. Turn off your computer\n2. Go for a walk\n3. Realise that in the grand scheme of things a free shirt is really not that important\n4. Return home\n5. Turn on your computer\n6. Thank <@541305895544422430> for being so awesome",
    title: "How do I track my swag?",
    aliases: [],
  },
  {
    name: "trees",
    content:
      "Rather than receive t-shirts as swag, you can choose to have a tree planted in your name and help make Hacktoberfest more carbon neutral.\nTrees > Tees",
    title: "Is there another option besides a shirt?",
    aliases: [],
  },
  {
    name: "uwu",
    content: "Oh hello uwu",
    title: "UWU?",
    aliases: [],
  },
  {
    name: "win",
    content:
      "Hacktoberfest doesn't have any winners or losers. Positive contributions to the open-source community is a win for everyone",
    title: "Can I/how do I win Hacktoberfest?",
    aliases: [],
  },
];
