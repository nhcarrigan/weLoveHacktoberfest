/* eslint-disable jsdoc/require-jsdoc */
import { luke } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isLuke: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("luke") ||
      message.author.id === "689411893156511769" ||
      message.content.includes("L U K E") ||
      checkMentions(message, "689411893156511769")
    );
  },
  generator: () => {
    const random = getRandom(luke);
    return luke[random];
  },
};
