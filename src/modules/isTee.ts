/* eslint-disable jsdoc/require-jsdoc */
import { ModuleInterface } from "../interfaces/ModuleInterface";

export const isTee: ModuleInterface = {
  validator: (message) => {
    return (
      message.content.replace(/\s/g, "").toLowerCase().includes("tee") ||
      message.content.replace(/\s/g, "").toLowerCase().includes("shirt") ||
      message.content.includes("T E E") ||
      message.content.includes("T S H I R T ")
    );
  },
  generator: () => {
    return "TREES > TEES";
  },
};
