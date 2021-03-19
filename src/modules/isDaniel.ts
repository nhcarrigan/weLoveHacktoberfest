import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";
import { daniel } from "../data/phrases";

export const isDaniel: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("daniel") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("dan") ||
      message.author.id === "731236961439973458" ||
      message.content.includes("D A N") ||
      message.content.includes("D A N I E L") ||
      checkMentions(message, "731236961439973458")
    );
  },
  generator: () => {
    const random = getRandom(daniel);
    return daniel[random];
  },
};
