import { Client } from "discord.js";
import { onMessage } from "./events/onMessage";
import { onReady } from "./events/onReady";
import { ExtendedClientInterface } from "./interfaces/ExtendedClientInterface";

const client = new Client() as ExtendedClientInterface;
const token = process.env.TOKEN;

client.timer = 0;
const cooldown = parseInt(process.env.COOLDOWN || "30000");
client.cooldown = isNaN(cooldown) ? 30000 : cooldown;

if (!token) {
  console.error("Missing Discord Token");
  process.exit(1);
}

client.on("message", async (message) => await onMessage(message, client));

client.on("ready", () => onReady(client));

client.on("error", () => {
  process.exit(1);
});

client.login(token);
