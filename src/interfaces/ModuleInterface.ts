import { Message } from "discord.js";

export interface ModuleInterface {
  /**
   * Function to validate that the message refers to the module's user.
   *
   * @param {Message} message The message to check.
   * @returns {boolean} Whether the message is related to the user.
   */
  validator: (message: Message) => boolean;
  /**
   * Function to generate a phrase related to the module's user.
   *
   * @returns {string} A phrase to be sent in Discord.
   */
  generator: () => string;
}
