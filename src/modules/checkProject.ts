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
 */
export const checkProject = async (client: Bot, message: Message) => {
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
      `<@!${message.author.id}>, please don't post in this channel if you aren't sharing a project. Make sure you're sharing a GitHub/GitLab repository link, or a specific issue link.`
    );
    setTimeout(async () => await notif.delete(), TTD);
    return;
  }

  if (matches.length > 5) {
    await message.delete();
    const notif = await message.channel.send(
      `<@!${message.author.id}>, please don't post many links at once, as this can be quite spammy.`
    );
    setTimeout(async () => await notif.delete(), TTD);
    return;
  }

  let existsNotified = false;
  for (const match of matches) {
    const data = parseProjectLink(match);
    const opts = { ...data, userId: message.author.id };
    const alreadySent = await isInDatabase(client, opts);
    if (alreadySent && !existsNotified) {
      existsNotified = true;
      await message.delete();
      const notif = await message.channel.send(
        `<@!${message.author.id}>, please do not share your project repeatedly. This channel is searchable, so there is no need to clog it up with multiple posts.`
      );
      setTimeout(async () => await notif.delete(), TTD);
    }
  }
};
