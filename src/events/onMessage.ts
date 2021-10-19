import { Message } from "discord.js";

import { Bot } from "../interfaces/Bot";
import { _moduleList } from "../modules/_moduleList";
import { errorHandler } from "../utils/errorHandler";

/**
 * Handles the message event.
 *
 * @param {Message} message The message object.
 * @param {Bot} client The client object.
 */
export const onMessage = async (
  message: Message,
  client: Bot
): Promise<void> => {
  try {
    // Bypass these restrictions in an explicit development environment
    if (process.env.NODE_ENV !== "development") {
      if (Date.now() - client.timer <= client.cooldown) {
        return;
      }

      if (process.env.TARGET_CHANNEL !== message.channel.id) {
        return;
      }
    }

    //bot ignores itself
    if (message.author.id === client.user?.id) {
      return;
    }

    const responses: string[] = [];
    let toSay = false;

    for (const module of _moduleList) {
      if (module.validator(message)) {
        responses.push(module.generator());
        toSay = true;
      }
    }

    if (toSay) {
      client.timer = Date.now();
      await message.react("💜");
      await message.channel.send(responses.join("\n"));
    }
  } catch (err) {
    errorHandler("message event", err);
  }
};
