/* eslint-disable jsdoc/require-jsdoc */
import { andy } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isAndy: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("andy") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("andyh") ||
      message.author.id === "745084025974161520" ||
      message.content.includes("A N D Y") ||
      message.content.includes("A N D Y H") ||
      checkMentions(message, "745084025974161520")
    );
  },
  generator: () => {
    const random = getRandom(andy);
    return andy[random];
  },
};
