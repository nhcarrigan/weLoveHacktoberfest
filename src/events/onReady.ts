import { Bot } from "../interfaces/Bot";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";
import { registerCommands } from "../utils/registerCommands";

/**
 * Handles the ready event (when the bot connects to Discord).
 *
 * @param {Bot} bot The bot object.
 */
export const onReady = async (bot: Bot): Promise<void> => {
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
      `Cooldown is set to ${bot.cooldown / 1000} seconds.`
    );

    await registerCommands(bot);

    await bot.debugHook.send({
      content: "Hacktoberfest bot online!",
      username: bot.user?.username ?? "Hacktoberfest",
      avatarURL:
        bot.user?.displayAvatarURL() ??
        "https://cdn.nhcarrigan.com/avatars/nhcarrigan.png"
    });
  } catch (err) {
    await errorHandler(bot, "ready event", err);
  }
};
