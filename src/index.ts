import { Client } from "discord.js";
import { onMessage } from "./events/onMessage";

const client = new Client();
const token = process.env.TOKEN;

if (!token) {
  console.error("Missing Discord Token");
  process.exit(1);
}

client.on("message", (message) => onMessage(message, client));

client.on("ready", () => console.log("bot ready!"));

client.login(token);
