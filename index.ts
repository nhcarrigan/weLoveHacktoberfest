import { Client, Message } from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const client = new Client();
const token = process.env.TOKEN;

client
  .login(token)
  .then(() => console.log("It's alive!"))
  .catch((err) => console.error(err));

client.on("message", (message: Message) => {
    if (message.content.toLowerCase().includes("matt") || message.author.id === "541305895544422430") {
        message.channel.send("We love Matt")
        message.react("💜")
    }
});
