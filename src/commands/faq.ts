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
        .setName("question")
        .setDescription("The question to find in the FAQ.")
        .setRequired(true)
        .setAutocomplete(true)
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to whom the request should be addressed to.")
    ),
  run: async (bot, interaction) => {
    try {
      await interaction.deferReply();
      const targetQ = interaction.options.getString("question", true);
      const target = tags.find((tag) => tag.question === targetQ);

      if (!target) {
        await interaction.editReply(`No tag found for \`${targetQ}\`.`);
        return;
      }

      const user = interaction.options.getUser("user");

      const embed = new EmbedBuilder();
      embed.setTitle(target.question);
      embed.setDescription(target.answer);
      embed.setFooter({
        text: "Join our server: https://chat.nhcarrigan.com",
        iconURL: "https://cdn.nhcarrigan.com/profile.png"
      });

      const response = user
        ? {
            embeds: [embed],
            content: `Hey <@!${user.id}>, this should answer your question.`,
            allowedMentions: {
              users: [user.id]
            }
          }
        : {
            embeds: [embed]
          };

      await interaction.editReply(response);
    } catch (err) {
      await errorHandler(bot, "faq command", err);
    }
  }
};
