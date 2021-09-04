/* eslint-disable jsdoc/require-jsdoc */
import { gabriel } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isGabriel: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("gabriel") ||
      message.author.id === "136667863778983936" ||
      message.content.includes("G A B R I E L") ||
      checkMentions(message, "136667863778983936")
    );
  },
  generator: () => {
    const random = getRandom(gabriel);
    return gabriel[random];
  },
};
