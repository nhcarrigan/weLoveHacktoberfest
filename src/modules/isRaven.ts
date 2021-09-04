/* eslint-disable jsdoc/require-jsdoc */
import { raven } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isRaven: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("raven") ||
      message.author.id === "228290260239515649" ||
      message.content.includes("R A V E N") ||
      checkMentions(message, "228290260239515649")
    );
  },
  generator: () => {
    const random = getRandom(raven);
    return raven[random];
  },
};
