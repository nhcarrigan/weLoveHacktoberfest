/* eslint-disable jsdoc/require-jsdoc */
import { walshy } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isWalshy: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("walshy") ||
      message.author.id === "453920106498621451" ||
      message.content.includes("W A L S H Y") ||
      checkMentions(message, "453920106498621451")
    );
  },
  generator: () => {
    const random = getRandom(walshy);
    return walshy[random];
  },
};
