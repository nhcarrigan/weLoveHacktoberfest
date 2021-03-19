import { hacktoberfest } from "../data/phrases";
import { getRandom } from "../helpers/getRandom";
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isHacktoberfest: ModuleInterface = {
  validator: (message) => {
    return (
      message.content
        .replace(/\s/g, "")
        .toLowerCase()
        .includes("hacktoberfest") ||
      message.content.includes("H A C K T O B E R F E S T")
    );
  },
  generator: () => {
    const random = getRandom(hacktoberfest);
    return hacktoberfest[random];
  },
};
