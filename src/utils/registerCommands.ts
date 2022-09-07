import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";

import { Bot } from "../interfaces/Bot";

import { errorHandler } from "./errorHandler";
import { logHandler } from "./logHandler";

/**
 * Takes both the commands and contexts, parses the `data` properties as needed,
 * and builds an array of all command data. Then, posts the data to the Discord endpoint
 * for registering commands.
 *
 * @param {Bot} bot Bot's Discord instance.
 * @returns {boolean} True if the commands were registered, false  on error.
 */
export const registerCommands = async (bot: Bot): Promise<boolean> => {
  try {
    const rest = new REST({ version: "9" }).setToken(bot.token);

    const commandData = bot.commands.map((command) => command.data.toJSON());

    logHandler.log("debug", "registering to home guild only");

    await rest.put(
      Routes.applicationGuildCommands(bot.user?.id || "oops", bot.homeGuild),
      { body: commandData }
    );
    return true;
  } catch (err) {
    await errorHandler("register commands", err);
    return false;
  }
};
