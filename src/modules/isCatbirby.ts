import { catbirby } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isCatbirby: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("catbirby") ||
      message.author.id === "131953641371205632" ||
      message.content.includes("C A T B I R B Y") ||
      checkMentions(message, "131953641371205632")
    );
  },
  generator: () => {
    const random = getRandom(catbirby);
    return catbirby[random];
  },
};
