import { readdir } from "fs/promises";
import { join } from "path";

import { Bot } from "../interfaces/Bot";
import { Command } from "../interfaces/Command";

import { errorHandler } from "./errorHandler";

/**
 * Reads the `/commands` directory and dynamically imports the files,
 * then pushes the imported data to an array. Assigns it to the client.
 *
 * @param {Bot} bot The client object.
 */
export const loadCommands = async (bot: Bot): Promise<void> => {
  try {
    const result: Command[] = [];
    const files = await readdir(
      join(process.cwd(), "prod", "commands"),
      "utf-8"
    );
    for (const file of files) {
      const name = file.split(".")[0];
      if (!name) {
        continue;
      }
      const mod = await import(
        join(process.cwd(), "prod", "commands", `${file}`)
      );
      result.push(mod[name] as Command);
    }
    bot.commands = result;
  } catch (err) {
    await errorHandler(bot, "load commands", err);
  }
};
