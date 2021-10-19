import { Client } from "discord.js";

export interface Bot extends Client {
  timer: number;
  cooldown: number;
}
