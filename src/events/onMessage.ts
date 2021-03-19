import { Message } from "discord.js";
import { ExtendedClientInterface } from "../interfaces/ExtendedClientInterface";

export const onMessage = async (
  message: Message,
  client: ExtendedClientInterface
): Promise<void> => {
  /*
  if (Date.now() - timer <= 30000) {
    return;
  }
  */

  //bot ignores itself
  if (message.author.id === client.user?.id) {
    return;
  }

  //lock to #share-the-love channel
  if (message.channel.id !== "762002255327002654") {
    return;
  }

  const responses: string[] = [];
  const toSay = false;

  /**
   * Push to responses
   * make toSay true
   * timer = date.now
   */

  // If we should say something. add the reaction and join all the responses in one message
  if (toSay) {
    message.react("💜");
    message.channel.send(responses.join("\n"));
  }
};
