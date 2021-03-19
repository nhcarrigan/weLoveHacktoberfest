import { Message } from "discord.js";
import { ExtendedClientInterface } from "../interfaces/ExtendedClientInterface";

export const onMessage = async (
  message: Message,
  client: ExtendedClientInterface
): Promise<void> => {
  // Bypass these restrictions in an explicit development environment
  if (process.env.NODE_ENV !== "development") {
    if (Date.now() - client.timer <= 30000) {
      return;
    }

    if (process.env.TARGET_CHANNEL === message.channel.id) {
      return;
    }
  }

  //bot ignores itself
  if (message.author.id === client.user?.id) {
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
    client.timer = Date.now();
  }
};
