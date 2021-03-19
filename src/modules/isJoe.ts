import { joe } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isJoe: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("joe") ||
      message.author.id === "163355465793798145" ||
      message.content.includes("J O E") ||
      checkMentions(message, "163355465793798145")
    );
  },
  generator: () => {
    const random = getRandom(joe);
    return joe[random];
  },
};
