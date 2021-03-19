import { Client } from "discord.js";
import { onMessage } from "./events/onMessage";
import { onReady } from "./events/onReady";
import { ExtendedClientInterface } from "./interfaces/ExtendedClientInterface";

const client = new Client() as ExtendedClientInterface;
const token = process.env.TOKEN;

client.timer = 0;

if (!token) {
  console.error("Missing Discord Token");
  process.exit(1);
}

client.on("message", async (message) => await onMessage(message, client));

client.on("ready", onReady);

client.login(token);
