import {
  GuildChannelResolvable,
  Message,
  PermissionFlagsBits,
} from "discord.js";

import { Bot } from "../interfaces/Bot";

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

  const validLinkRegex =
    /\bhttps?:\/\/(?:www\.)?git(?:hub\.com(\/[^/#?\s]+\/[^/#?\s]+)(?:\/issues(\/\d+))?|lab\.com((?:\/[^/#?\s]+){2,})(?:\/-\/issues(\/\d+))?)\b/gim;

  const matches = message.content.match(validLinkRegex);

  if (!matches || matches.length < 1) {
    await message.delete();
    const notif = await message.channel.send(
      `<@!${message.author.id}>, please don't post in this channel if you aren't sharing a project. Make sure you're sharing a GitHub/GitLab repository link, or a specific issue link.`
    );
    setTimeout(async () => await notif.delete(), 60000);
    return;
  }

  if (matches.length > 5) {
    await message.delete();
    const notif = await message.channel.send(
      `<@!${message.author.id}>, please don't post many links at once, as this can be quite spammy.`
    );
    setTimeout(async () => await notif.delete(), 60000);
    return;
  }
};
