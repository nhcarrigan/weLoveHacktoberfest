/* eslint-disable jsdoc/require-jsdoc */
import { restarter } from "../data/phrases";
import { checkMentions } from "../helpers/checkMentions";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isRestarter: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("restarter") ||
      message.content
        .replace(/\s/g, "")
        .toLowerCase()
        .includes("restarterv3") ||
      message.content.includes("R E S T A R T E R") ||
      checkMentions(message, "438978127973318656")
    );
  },
  generator: () => {
    const random = getRandom(restarter);
    return restarter[random];
  },
};
