import { Client } from "discord.js";
import { onMessage } from "./events/onMessage";

const client = new Client();
const token = process.env.TOKEN;

//connect the bot
client
  .login(token)
  .then(() => console.log("It's alive!"))
  .catch((err) => console.error(err));

client.on("message", (message) => onMessage(message, client));
