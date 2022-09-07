import { Client } from "discord.js";

import { Command } from "./Command";

export interface Bot extends Client {
  token: string;
  homeGuild: string;
  timer: number;
  cooldown: number;
  commands: Command[];
}
