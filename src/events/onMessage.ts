import { Message } from "discord.js";

import { Bot } from "../interfaces/Bot";
import { checkProject } from "../modules/checkProject";
import { sendLove } from "../modules/sendLove";
import { errorHandler } from "../utils/errorHandler";

/**
 * Handles the message event.
 *
 * @param {Message} message The message object.
 * @param {Bot} client The client object.
 */
export const onMessage = async (
  message: Message,
  client: Bot,
): Promise<void> => {
  try {
    if (message.author.id === client.user?.id) {
      return;
    }

    await sendLove(client, message);

    await checkProject(client, message, false);
  } catch (err) {
    await errorHandler("message event", err);
  }
};
