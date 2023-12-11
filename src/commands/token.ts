import { SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";

export const token: Command = {
  data: new SlashCommandBuilder()
    .setName("token")
    .setDescription("Set or update your reporting token.")
    .addStringOption((option) =>
      option
        .setName("token")
        .setDescription("Your Hacktoberfest auth token.")
        .setRequired(true)
    ),
  run: async (bot, interaction) => {
    await interaction.deferReply({ ephemeral: true });

    const token = interaction.options.getString("token", true);

    const user = interaction.user.id;

    const response = (await fetch(
      "https://hackathon-tracker.digitalocean.com/users/%40me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(async (res) => await res.json())
      .catch((err) => err)) as { code?: string; name?: string };

    if (response.code === "InvalidCredentials") {
      await interaction.editReply("Your token is invalid.");
      return;
    }

    bot.reportTokens[user] = token;

    await interaction.editReply(
      `Your token has been set for the account ${response.name || "unknown"}`
    );
  }
};
