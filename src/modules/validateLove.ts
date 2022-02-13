import { Message } from "discord.js";

import { checkMentions } from "../helpers/checkMentions";
import { LoveData } from "../interfaces/LoveData";
import { errorHandler } from "../utils/errorHandler";

/**
 * Universal module to check if the message meets the love
 * requirements.
 *
 * @param {Message} message The message to validate.
 * @param {LoveData} data The data to validate against.
 * @returns {boolean} True if message meets conditions.
 */
export const validateLove = (message: Message, data: LoveData): boolean => {
  try {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes(data.name) ||
      message.content.includes(data.emoji) ||
      (!!data.id &&
        (message.author.id === data.id || checkMentions(message, data.id)))
    );
  } catch (err) {
    void errorHandler("validate love", err);
    return false;
  }
};
