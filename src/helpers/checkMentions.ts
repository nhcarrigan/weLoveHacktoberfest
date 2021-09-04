import { Message } from "discord.js";

/**
 * Validates if the message content includes a specific user ID.
 *
 * @param {Message} message The message to check.
 * @param {string} checkId The ID to look for a mention of.
 * @returns {boolean} True if the content includes the ID, false otherwise.
 */
export const checkMentions = (message: Message, checkId: string): boolean => {
  return message.content.toString().includes(checkId);
};
