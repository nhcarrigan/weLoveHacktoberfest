import { Message, EmbedBuilder } from "discord.js";

import { tags } from "../data/tags";
import { errorHandler } from "../utils/errorHandler";

/**
 * Checks for a valid tag in the message and returns the data.
 *
 * @param {Message} message The Discord message payload.
 */
export const sendTag = async (message: Message): Promise<void> => {
  try {
    const embed = new EmbedBuilder();

    const target = message.content.split(".")[1];

    if (target === "--list") {
      embed.setTitle("Available Tags");
      embed.setDescription(
        "These are the available tags and aliases. The tag data are all open source, and you can [make a pull request](https://github.com/nhcarrigan/we-love-hacktoberfest) to update the data."
      );
      embed.addFields(
        tags.map((tag) => ({
          name: tag.name,
          value: tag.aliases.length
            ? tag.aliases.map((el) => `\`${el}\``).join(", ")
            : "*This tag has no aliases.",
        }))
      );
      embed.setFooter({
        text: "Spread the love? https://donate.nhcarrigan.com",
        iconURL: "https://cdn.nhcarrigan.com/profile.png",
      });
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
      embed.setFooter({
        text: "Spread the love? https://donate.nhcarrigan.com",
        iconURL: "https://cdn.nhcarrigan.com/profile.png",
      });
      await message.reply({ embeds: [embed] });
      return;
    }

    embed.setTitle(tag.title);
    embed.setDescription(tag.content);
    embed.setFooter({
      text: "Spread the love? https://donate.nhcarrigan.com",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    await message.reply({ embeds: [embed] });
  } catch (err) {
    await errorHandler("send tag", err);
  }
};
