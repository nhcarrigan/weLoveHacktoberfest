import { hacktoberfest } from "../data/phrases";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isDigitalOcean: ModuleInterface = {
  validator: (message) => {
    return (
      message.content
        .replace(/\s/g, "")
        .toLowerCase()
        .includes("digitalocean") ||
      message.content.includes("D I G I T A L O C E A N")
    );
  },
  generator: () => {
    const random = getRandom(hacktoberfest);
    return hacktoberfest[random];
  },
};
