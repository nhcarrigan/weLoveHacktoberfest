import { Client } from "discord.js";

export interface ExtendedClientInterface extends Client {
  timer: number;
}
