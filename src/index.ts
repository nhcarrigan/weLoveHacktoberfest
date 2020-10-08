import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import { matt } from "./phrases";

// initialise
dotenv.config();
const client = new Client();
const token = process.env.TOKEN;
let timer = 0;

// condition validation
const isMatt = (message: Message): boolean => {
  return (
    message.content.toLowerCase().includes("matt") ||
    message.author.id === "541305895544422430"
  );
};

//connect the bot
client
  .login(token)
  .then(() => console.log("It's alive!"))
  .catch((err) => console.error(err));

//message handler
client.on("message", (message: Message) => {
  //cooldown feature
  if (Date.now() - timer <= 30000) {
    return;
  }

  //bot ignores itself
  if (message.author.id === client.user?.id) {
    return;
  }

  //lock to #we-love-matt channel
  if (message.channel.id !== "762002255327002654") {
    return;
  }

  //respond for matt
  if (isMatt(message)) {
    const random = Math.floor(Math.random() * matt.length);
    message.channel.send(matt[random]);
    message.react("💜");
    timer = Date.now();
  }
});
