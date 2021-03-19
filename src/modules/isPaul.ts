import { paul } from "../data/phrases";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isPaul: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("paul") ||
      message.content.includes("P A U L")
    );
  },
  generator: () => {
    const random = getRandom(paul);
    return paul[random];
  },
};
