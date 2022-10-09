import { SlashCommandBuilder } from "discord.js";
import fetch from "node-fetch";

import { Command } from "../interfaces/Command";

export const report: Command = {
  data: new SlashCommandBuilder()
    .setName("report")
    .setDescription(
      "Report a repository for being ineligible for Hacktoberfest."
    )
    .addStringOption((option) =>
      option
        .setName("provider")
        .setDescription("The VCS provider for the repository.")
        .setRequired(true)
        .setChoices(
          { name: "GitHub", value: "github" },
          { name: "GitLab", value: "gitlab" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("owner")
        .setDescription("The username of the repository owner.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("repo")
        .setDescription("The name of the repository.")
        .setRequired(true)
    ),
  run: async (bot, interaction) => {
    await interaction.deferReply({ ephemeral: true });

    const provider = interaction.options.getString("provider", true);
    const owner = interaction.options.getString("owner", true);
    const repo = interaction.options.getString("repo", true);

    const user = interaction.user.id;
    const token = bot.reportTokens[user];

    if (!token) {
      await interaction.editReply(
        "You must set your token before reporting a repository. Please use `/token` to set your token."
      );
      return;
    }

    const response = await fetch(
      "https://hackathon-tracker.digitalocean.com/events/4/excluded_repositories",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ provider, name: `${owner}/${repo}` }),
      }
    )
      .then(async (res) => await res.json())
      .catch((err) => err);

    if (response.code === "InvalidContent") {
      await interaction.editReply("You have already reported this repository.");
      return;
    }

    if (response.code === "InvalidCredentials") {
      await interaction.editReply(
        "Your token is invalid. Please use `/token` to update your token."
      );
      return;
    }

    if (response.code === "NotFound") {
      await interaction.editReply(
        `Could not find a repository at https://${provider}.com/${owner}/${repo}`
      );
      return;
    }

    await interaction.editReply(
      `Your report has been submitted. Thank you for your contribution!`
    );
  },
};
