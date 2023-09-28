import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import {
  GitLabLanguageIds,
  LanguageChoices,
  LanguageColours,
} from "../config/Languages";
import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const search: Command = {
  data: new SlashCommandBuilder()
    .setName("search")
    .setDescription(
      "Discover opensource projects built with your programming language."
    )
    .addStringOption((option) =>
      option
        .setName("vcs")
        .setDescription("The Version Control Service that you want to search.")
        .addChoices(
          { name: "GitHub", value: "github" },
          { name: "GitLab", value: "gitlab" }
        )
        .setRequired(true)
    )
    .addStringOption((options) =>
      options
        .setName("lang")
        .setDescription("The Language that you want to search for.")
        .setRequired(true)
        .setAutocomplete(true)
    ),
  run: async (_bot, interaction) => {
    try {
      await interaction.deferReply();
      const vcs = interaction.options.getString("vcs", true);
      const lang = interaction.options.getString(
        "lang",
        true
      ) as keyof typeof LanguageChoices;

      const url =
        vcs === "github"
          ? `https://${vcs}.com/search?q=topic%3Ahacktoberfest%20language%3A${lang}&type=repositories`
          : `https://${vcs}.com/explore/projects/topics/hacktoberfest?language=${
              GitLabLanguageIds[lang] ?? ""
            }`;

      const embed = new EmbedBuilder()
        .setTitle(`${lang} projects on ${vcs}`)
        .setDescription(
          `[Click here to view ${lang} projects on ${vcs}](${url})`
        )
        .setColor(LanguageColours[lang] ?? null);
      embed.setFooter({
        text: "Join our server: https://chat.nhcarrigan.com",
        iconURL: "https://cdn.nhcarrigan.com/profile.png",
      });
      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      await errorHandler("search command", err);
    }
  },
};
