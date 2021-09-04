/* eslint-disable jsdoc/require-jsdoc */
import { lorna } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isLorna: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("lorna") ||
      message.author.id === "531813647253504001" ||
      message.content.includes("L O R N A") ||
      checkMentions(message, "531813647253504001")
    );
  },
  generator: () => {
    const random = getRandom(lorna);
    return lorna[random];
  },
};
