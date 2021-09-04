/* eslint-disable jsdoc/require-jsdoc */
import { ben } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isBen: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("ben") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("benjamin") ||
      message.author.id === "664240791861985320" ||
      message.content.includes("B E N J A M I N") ||
      message.content.includes("B E N") ||
      checkMentions(message, "664240791861985320")
    );
  },
  generator: () => {
    const random = getRandom(ben);
    return ben[random];
  },
};
