/* eslint-disable jsdoc/require-jsdoc */
import { intel } from "../data/phrases";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isIntel: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("intel") ||
      message.content.includes("I N T E L")
    );
  },
  generator: () => {
    const random = getRandom(intel);
    return intel[random];
  },
};
