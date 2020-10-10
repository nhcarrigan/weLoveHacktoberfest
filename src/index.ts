import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import { matt, raven, luke, nick } from "./phrases";

// initialise
dotenv.config();
const client = new Client();
const token = process.env.TOKEN;
let timer = 0;

// condition validation
const isMatt = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("matt") ||
    message.author.id === "541305895544422430" ||
    message.content.includes("🇲 🇦 🇹 🇹") ||
    message.content.includes("🇲 🅰️ 🇹 🇹")
  );
};

const isRaven = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("raven") ||
    message.author.id === "228290260239515649" ||
    message.content.includes("R A V E N")
  );
};

const isLuke = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("luke") ||
    message.author.id === "689411893156511769" ||
    message.content.includes("L U K E")
  );
};

const isNick = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("nick") ||
    message.content.replace(/\s/g, "").toLowerCase().includes("nicholas") ||
    message.author.id === "465650873650118659" ||
    message.content.includes("N I C K") ||
    message.content.includes("N I C H O L A S")
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
  //respond for Raven
  if (isRaven(message)) {
    const random = Math.floor(Math.random() * raven.length);
    message.channel.send(raven[random]);
    message.react("💜");
    timer = Date.now();
  }
  //respond for Luke
  if (isLuke(message)) {
    const random = Math.floor(Math.random() * luke.length);
    message.channel.send(luke[random]);
    message.react("💜");
    timer = Date.now();
  }
  //respond for Nicholas
  if (isNick(message)) {
    const random = Math.floor(Math.random() * nick.length);
    message.channel.send(nick[random]);
    message.react("💜");
    timer = Date.now();
  }
});
