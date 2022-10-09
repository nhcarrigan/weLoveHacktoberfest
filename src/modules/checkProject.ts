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

  const hasProject =
    /\bhttps?:\/\/(www\.)?git(hub|lab)\.com\/[^/]+\/[^/]+((\/-)?\/issues(\/\d+)?)?\/?\b/.test(
      message.content
    );

  if (!hasProject) {
    await message.delete();
    await message.channel.send(
      `<@!${message.author.id}>, please don't post in this channel if you aren't sharing a project.`
    );
    return;
  }
};
