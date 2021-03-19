import { Message } from "discord.js";

export interface ModuleInterface {
  validator: (message: Message) => boolean;
  generator: () => string;
}
