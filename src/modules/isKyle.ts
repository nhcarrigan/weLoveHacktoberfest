/* eslint-disable jsdoc/require-jsdoc */
import { kyle } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isKyle: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("kyle") ||
      message.author.id === "135865279149375489" ||
      message.content.includes("K Y L E") ||
      checkMentions(message, "135865279149375489")
    );
  },
  generator: () => {
    const random = getRandom(kyle);
    return kyle[random];
  },
};
