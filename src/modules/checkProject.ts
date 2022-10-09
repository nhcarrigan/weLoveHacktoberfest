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
    /\bhttps?:\/\/(www\.)?git(hub\.com\/([!$&-;=-[\]_a-z~]|%[0-9a-fA-F]{2})+\/([!$&-;=-[\]_a-z~]|%[0-9a-fA-F]{2})+(\/issues(\/\d+))?|lab\.com(\/([!$&-;=-[\]_a-z~]|%[0-9a-fA-F]{2})+){2,}(\/-\/issues(\/\d+))?)\/?\b/gm;

  const matches = message.content.match(validLinkRegex);

  if (!matches || matches.length < 1) {
    await message.delete();
    await message.channel.send(
      `<@!${message.author.id}>, please don't post in this channel if you aren't sharing a project.`
    );
    return;
  }

  if (matches.length > 5) {
    await message.delete();
    await message.channel.send(
      `<@!${message.author.id}>, please don't post multiple links as this gets quite spammy.`
    );
    return;
  }
};
