import { Message, MessageEmbed } from "discord.js";

import { hearts } from "../data/hearts";
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
      const embed = new MessageEmbed();
      embed.setTitle("Spread the Love!");
      embed.setDescription(responses.join("\n"));
      embed.setThumbnail(
        `https://raw.githubusercontent.com/lukeocodes/dev-hearts/main/build/${getRandom(
          hearts
        )}.png`
      );
      embed.setFooter(
        "Spread the love? https://donate.nhcarrigan.com",
        "https://cdn.nhcarrigan.com/profile-transparent.png"
      );
      await message.react("💜");
      await message.channel.send({ embeds: [embed] });
    }
  } catch (err) {
    errorHandler("send love", err);
  }
};
