import { Message } from "discord.js";

import { loveData } from "../data/loveData";
import { getRandom } from "../helpers/getRandom";
import { Bot } from "../interfaces/Bot";
import { errorHandler } from "../utils/errorHandler";

import { validateLove } from "./validateLove";

/**
 * Logic to respond to valid messages with love.
 *
 * @param {Bot} client The bot's discord instance.
 * @param {Message} message The discord message payload.
 */
export const sendLove = async (
  client: Bot,
  message: Message
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

      const responses: string[] = [];
      let toSay = false;

      for (const love of loveData) {
        if (validateLove(message, love)) {
          responses.push(getRandom(love.phrases));
          toSay = true;
        }
      }

      if (toSay) {
        client.timer = Date.now();
        await message.react("💜");
        await message.channel.send(responses.join("\n"));
      }
    }
  } catch (err) {
    errorHandler("send love", err);
  }
};
