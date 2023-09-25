import { Interaction, InteractionType } from "discord.js";
import { compareTwoStrings } from "string-similarity";

import { LanguageChoices } from "../config/Languages";
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
    if (interaction.commandName === "search") {
      const option = interaction.options.getFocused(true);

      if (option.name === "lang") {
        const languageNames = Object.entries(LanguageChoices);
        const search = option.value;
        const choices = languageNames
          .sort((a, b) =>
            compareTwoStrings(b[1], search) > compareTwoStrings(a[1], search)
              ? 1
              : -1
          )
          .slice(0, 5);
        await interaction.respond(
          choices.map(([value, name]) => ({ name, value }))
        );
      }
    }
    if (interaction.commandName === "faq") {
      const option = interaction.options.getFocused(true);

      if (option.name === "question") {
        const tagNames = tags.map((tag) => tag.question);
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
