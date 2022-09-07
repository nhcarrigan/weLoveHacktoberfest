import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import { tags } from "../data/tags";
import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const faq: Command = {
  data: new SlashCommandBuilder()
    .setName("faq")
    .setDescription("Get answers for frequently asked questions.")
    .addStringOption((option) =>
      option
        .setName("tag")
        .setDescription("The tag name for the relevant response.")
        .setRequired(true)
        .setAutocomplete(true)
    ),
  run: async (bot, interaction) => {
    try {
      await interaction.deferReply();
      const targetName = interaction.options.getString("tag", true);
      const target = tags.find(
        (tag) => tag.name === targetName || tag.aliases.includes(targetName)
      );

      if (!target) {
        await interaction.reply(`No tag found for \`${targetName}\`.`);
        return;
      }

      const embed = new EmbedBuilder();
      embed.setTitle(target.title);
      embed.setDescription(target.content);
      embed.setFooter({
        text: "Spread the love? https://donate.nhcarrigan.com",
        iconURL: "https://cdn.nhcarrigan.com/profile.png",
      });

      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      await errorHandler("faq command", err);
    }
  },
};
