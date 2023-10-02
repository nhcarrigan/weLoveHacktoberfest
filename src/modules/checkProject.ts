import {
  GuildChannelResolvable,
  Message,
  PermissionFlagsBits,
} from "discord.js";

import { ProjectRegexString } from "../config/ProjectRegex";
import { Bot } from "../interfaces/Bot";

import { isInDatabase } from "./isInDatabase";
import { parseProjectLink } from "./parseProjectLink";

// 5 minutes
const TTD = 1000 * 60 * 5;

/**
 * Checks if a message in the project channel includes a valid GitHub/GitLab link.
 *
 * @param {Bot} client The bot's Discord instance.
 * @param {Message} message The message payload from Discord.
 * @param {boolean} isEdited If this was an edited message (rather than a created message).
 */
export const checkProject = async (
  client: Bot,
  message: Message,
  isEdited: boolean,
) => {
  if (!process.env.PROJECT_CHANNEL) {
    return;
  }
  const { guild, channel } = message;
  if (!guild || !channel) {
    return;
  }

  if (channel.id !== process.env.PROJECT_CHANNEL) {
    return;
  }

  // ignoring helpers to allow us to reply to messages when needed
  if (message.member?.roles.cache.has("735507717233573964")) {
    return;
  }

  const me =
    guild.members.cache.get(client.user?.id || "oopsie") ||
    (await guild.members.fetch(client.user?.id || "oopsie"));
  if (
    !me ||
    !me
      .permissionsIn(channel as GuildChannelResolvable)
      .has(PermissionFlagsBits.ManageMessages)
  ) {
    return;
  }

  const ProjectRegex = new RegExp(ProjectRegexString, "mig");

  const matches = message.content.match(ProjectRegex);

  if (!matches) {
    await message.delete();
    const notif = await message.channel.send(
      `<@!${message.author.id}>, please don't post in this channel if you aren't sharing a project. Make sure you're sharing a GitHub/GitLab repository link, or a specific issue link.`,
    );
    setTimeout(async () => await notif.delete(), TTD);
    return;
  }

  if (matches.length > 5) {
    await message.delete();
    const notif = await message.channel.send(
      `<@!${message.author.id}>, please don't post many links at once, as this can be quite spammy.`,
    );
    setTimeout(async () => await notif.delete(), TTD);
    return;
  }

  // we don't run the database logic on message edits.
  // theoretically this means someone could abuse the system by editing a repo link in,
  // but then we'll just ban them forever :3
  if (isEdited) {
    return;
  }

  const matchedRepos = matches
    .map((m) => parseProjectLink(m))
    .filter(
      (m, i, a) =>
        a.findLastIndex((x) => x.repo === m.repo && x.owner === m.owner) === i,
    );
  let existsNotified = false;
  for (const data of matchedRepos) {
    const opts = { ...data, userId: message.author.id };
    const alreadySent = await isInDatabase(client, opts);
    if (alreadySent && !existsNotified) {
      existsNotified = true;
      await message.delete();
      const notif = await message.channel.send(
        `<@!${message.author.id}>, please do not share your project repeatedly. This channel is searchable, so there is no need to clog it up with multiple posts.`,
      );
      setTimeout(async () => await notif.delete(), TTD);
    }
  }
};
