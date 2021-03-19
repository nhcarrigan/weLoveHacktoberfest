import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";
import { nick } from "../data/phrases";

export const isNick: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("nick") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("nicholas") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("nhcarrigan") ||
      message.author.id === "465650873650118659" ||
      message.content.includes("🇳 🇮 🇨 🇰") ||
      message.content.includes("🇳 🇮 🇨 🇭 🇴 🇱 🇦 🇸") ||
      checkMentions(message, "465650873650118659")
    );
  },
  generator: () => {
    const random = getRandom(nick);
    return nick[random];
  },
};
