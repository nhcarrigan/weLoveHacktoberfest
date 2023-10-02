import { Message } from "discord.js";

import { Bot } from "../interfaces/Bot";
import { checkProject } from "../modules/checkProject";
import { errorHandler } from "../utils/errorHandler";

/**
 * Handles the message edit event.
 *
 * @param {Message} message The message object.
 * @param {Bot} client The client object.
 */
export const onMessageEdit = async (
  message: Message,
  client: Bot
): Promise<void> => {
  try {
    if (message.author.id === client.user?.id) {
      return;
    }

    await checkProject(client, message, true);
  } catch (err) {
    await errorHandler("message event", err);
  }
};
