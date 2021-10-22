import { Message, MessageEmbed } from "discord.js";

import { tags } from "../data/tags";
import { errorHandler } from "../utils/errorHandler";

/**
 * Checks for a valid tag in the message and returns the data.
 *
 * @param {Message} message The Discord message payload.
 */
export const sendTag = async (message: Message): Promise<void> => {
  try {
    const embed = new MessageEmbed();

    const target = message.content.split(".")[1];

    if (target === "--list") {
      embed.setTitle("Available Tags");
      embed.setDescription(
        tags
          .map(
            (tag) =>
              `\`${tag.name}\` ${
                tag.aliases.length ? ` (\`${tag.aliases.join("/")}\`)` : ""
              }`
          )
          .join(" | ")
      );
      await message.reply({ embeds: [embed] });
      return;
    }

    const tag = tags.find(
      (t) => t.name === target || t.aliases.includes(target)
    );
    if (!tag) {
      embed.setTitle("Invalid Tag!");
      embed.setDescription(
        `${target} is not a valid tag! If you want to create or edit a tag, [make a pull request!](https://github.com/nhcarrigan/we-love-hacktoberfest)`
      );
      await message.reply({ embeds: [embed] });
      return;
    }

    embed.setTitle(tag.title);
    embed.setDescription(tag.content);
    embed.setFooter([tag.name, ...tag.aliases].join(", "));

    await message.reply({ embeds: [embed] });
  } catch (err) {
    errorHandler("send tag", err);
  }
};
