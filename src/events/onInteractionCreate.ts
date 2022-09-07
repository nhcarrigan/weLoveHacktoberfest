import { Interaction, InteractionType } from "discord.js";
import { compareTwoStrings } from "string-similarity";

import { tags } from "../data/tags";
import { Bot } from "../interfaces/Bot";

/**
 * Handles the interaction events from Discord.
 *
 * @param {Bot} bot The bot's Discord instance.
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const onInteraction = async (bot: Bot, interaction: Interaction) => {
  if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
    if (interaction.commandName === "faq") {
      const option = interaction.options.getFocused(true);

      if (option.name === "tag") {
        const tagNames = tags.map((tag) => tag.name);
        for (const tag of tags) {
          tagNames.push(...tag.aliases);
        }
        const search = option.value.toLowerCase();
        const choices = tagNames
          .sort((a, b) =>
            compareTwoStrings(b, search) > compareTwoStrings(a, search) ? 1 : -1
          )
          .slice(0, 5);
        await interaction.respond(
          choices.map((choice) => ({ name: choice, value: choice }))
        );
      }
    }
  }
  if (interaction.isChatInputCommand()) {
    const target = bot.commands.find(
      (command) => command.data.name === interaction.commandName
    );
    if (!target) {
      await interaction.reply(
        "That does not appear to be a valid slash command..."
      );
      return;
    }
    await target.run(bot, interaction);
  }
};
