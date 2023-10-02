import { PrismaClient } from "@prisma/client";
import { Client, WebhookClient } from "discord.js";

import { Command } from "./Command";

export interface Bot extends Client {
  token: string;
  debugHook: WebhookClient;
  homeGuild: string;
  timer: number;
  cooldown: number;
  commands: Command[];
  reportTokens: {
    [userId: string]: string;
  };
  db: PrismaClient;
}
