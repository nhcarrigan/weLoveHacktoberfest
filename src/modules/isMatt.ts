/* eslint-disable jsdoc/require-jsdoc */
import { matt } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isMatt: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("matt") ||
      message.author.id === "541305895544422430" ||
      message.content.includes("🇲 🇦 🇹 🇹") ||
      message.content.includes("🇲 🅰️ 🇹 🇹") ||
      checkMentions(message, "541305895544422430")
    );
  },
  generator: () => {
    const random = getRandom(matt);
    return matt[random];
  },
};
