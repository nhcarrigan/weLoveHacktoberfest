import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import { matt, raven, luke, nick, daniel, hacktoberfest } from "./phrases";

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
    message.content.includes("🇳 🇮 🇨 🇰") ||
    message.content.includes("🇳 🇮 🇨 🇭 🇴 🇱 🇦 🇸")
  );
};

const isDaniel = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("daniel") ||
    message.author.id === "731236961439973458" ||
    message.content.includes("D A N I E L")
  );
};

const isHack = (message: Message): boolean => {
  return (
    message.content
      .replace(/\s/g, "")
      .toLowerCase()
      .includes("hacktoberfest") ||
    message.content.includes("H A C K T O B E R F E S T")
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

  //lock to #share-the-love channel
  if (message.channel.id !== "762002255327002654") {
    return;
  }

  const responses = [];
  let toSay = false;

  // add response for matt
  if (isMatt(message)) {
    const random = Math.floor(Math.random() * matt.length);
    responses.push(matt[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Raven
  if (isRaven(message)) {
    const random = Math.floor(Math.random() * raven.length);
    responses.push(raven[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Luke
  if (isLuke(message)) {
    const random = Math.floor(Math.random() * luke.length);
    responses.push(luke[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Nicholas
  if (isNick(message)) {
    const random = Math.floor(Math.random() * nick.length);
    responses.push(nick[random]);
    toSay = true;
    timer = Date.now();
  }
  // add respond for Daniel
  if (isDaniel(message)) {
    const random = Math.floor(Math.random() * daniel.length);
    responses.push(daniel[random]);
    toSay = true;
    timer = Date.now();
  }
  // add respond for Hacktoberfest
  if (isHack(message)) {
    const random = Math.floor(Math.random() * hacktoberfest.length);
    responses.push(hacktoberfest[random]);
    toSay = true;
    timer = Date.now();
  }

  // If we should say something. add the reaction and join all the responses in one message
  if (toSay) {
    message.react("💜");
    message.channel.send(responses.join("\n"));
  }
});
