import { WebhookClient } from "discord.js";

import { Bot } from "../interfaces/Bot";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";
import { registerCommands } from "../utils/registerCommands";

/**
 * Handles the ready event (when the bot connects to Discord).
 *
 * @param {Bot} client The client object.
 */
export const onReady = async (client: Bot): Promise<void> => {
  try {
    logHandler.log("debug", "Discord is ready!");

    process.env.NODE_ENV === "production"
      ? logHandler.log(
          "info",
          "Bot is in production mode - channel lock and cooldown are active."
        )
      : logHandler.log(
          "warn",
          "Bot is NOT in production mode - if this a live instance, please set NODE_ENV to 'production'. Protections are disabled otherwise."
        );

    logHandler.log(
      "debug",
      `Cooldown is set to ${client.cooldown / 1000} seconds.`
    );

    await registerCommands(client);

    const hook = new WebhookClient({ url: process.env.DEBUG_HOOK as string });

    await hook.send("Hacktoberfest bot online!");
  } catch (err) {
    await errorHandler("ready event", err);
  }
};
