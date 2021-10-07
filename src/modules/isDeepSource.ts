/* eslint-disable jsdoc/require-jsdoc */
import { deepsource } from "../data/phrases";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isDeepSource: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("deepsource") ||
      message.content.includes("D E E P S O U R C E")
    );
  },
  generator: () => {
    const random = getRandom(deepsource);
    return deepsource[random];
  },
};
