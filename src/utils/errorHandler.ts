import { EmbedBuilder } from "discord.js";

import { Bot } from "../interfaces/Bot";

/**
 * Formats an error and sends it to the debug hook.
 *
 * @param {Bot} bot The bot's Discord instance.
 * @param {string} context A description of where in the code the error occurred.
 * @param {unknown} error The Node.js Error.
 */
export const errorHandler = async (
  bot: Bot,
  context: string,
  error: unknown
) => {
  // typecast
  const err = error as Error;
  const embed = new EmbedBuilder();
  embed.setTitle(`Error in \`${context}\`!`);
  embed.setDescription(
    `\`\`\`${err.stack || "No stack trace available."}\`\`\``
  );
  embed.addFields([
    {
      name: "Message",
      value: err.message || "No message available."
    }
  ]);
  await bot.debugHook.send({
    embeds: [embed],
    username: Becca.user?.username ?? "Hacktoberfest",
    avatarURL:
      Becca.user?.displayAvatarURL() ??
      "https://cdn.nhcarrigan.com/avatars/nhcarrigan.png"
  });
};
