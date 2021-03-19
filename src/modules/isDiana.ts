import { diana } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isDiana: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("diana") ||
      message.author.id === "458641967782428682" ||
      message.content.includes("D I A N A") ||
      checkMentions(message, "458641967782428682")
    );
  },
  generator: () => {
    const random = getRandom(diana);
    return diana[random];
  },
};
