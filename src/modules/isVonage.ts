import { vonage } from "../data/phrases";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isVonage: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("vonage") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("nexmo") ||
      message.content.includes("V O N A G E") ||
      message.content.includes("N E X M O")
    );
  },
  generator: () => {
    const random = getRandom(vonage);
    return vonage[random];
  },
};
