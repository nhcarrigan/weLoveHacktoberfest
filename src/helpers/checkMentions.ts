import { Message } from "discord.js";

export const checkMentions = (message: Message, checkId: string): boolean => {
  return message.content.toString().includes(checkId);
};
