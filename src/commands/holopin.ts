import { AttachmentBuilder, SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const holopin: Command = {
  data: new SlashCommandBuilder()
    .setName("holopin")
    .setDescription("Display a user's Holopin badge board.")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("The user to display the Holopin badge board for.")
        .setRequired(true)
        .setAutocomplete(true),
    ),
  run: async (_bot, interaction) => {
    try {
      await interaction.deferReply();
      const target = interaction.options.getString("username", true);

      const res = await fetch(`https://holopin.me/${target}`).catch(() => null);

      if (!res || res.status !== 200) {
        await interaction.editReply(
          "Could not locate that user's Holopin badge board.",
        );
        return;
      }

      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const attachment = new AttachmentBuilder(buffer, {
        name: `${target}.png`,
      });

      await interaction.editReply({ files: [attachment] });
    } catch (err) {
      await errorHandler("holopin command", err);
    }
  },
};
