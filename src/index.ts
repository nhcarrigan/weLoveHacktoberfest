import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import {
  matt,
  raven,
  luke,
  nick,
  daniel,
  hacktoberfest,
  ben,
  vonage,
  ocean,
  gabriel,
  lorna,
  diana,
  joe,
  kyle,
} from "./phrases";

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
    message.content.replace(/\s/g, "").toLowerCase().includes("dan") ||
    message.author.id === "731236961439973458" ||
    message.content.includes("D A N") ||
    message.content.includes("D A N I E L")
  );
};

const isBen = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("ben") ||
    message.content.replace(/\s/g, "").toLowerCase().includes("benjamin") ||
    message.author.id === "664240791861985320" ||
    message.content.includes("B E N J A M I N") ||
    message.content.includes("BEN")
  );
};

const isDiana = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("diana") ||
    message.author.id === "458641967782428682" ||
    message.content.includes("D I A N A")
  );
};

const isGabriel = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("gabriel") ||
    message.author.id === "136667863778983936" ||
    message.content.includes("G A B R I E L")
  );
};

const isKyle = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("kyle") ||
    message.author.id === "135865279149375489" ||
    message.content.includes("K Y L E")
  );
};

const isJoe = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("joe") ||
    message.author.id === "163355465793798145" ||
    message.content.includes("JOE")
  );
};

const isLorna = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("lorna") ||
    message.author.id === "531813647253504001" ||
    message.content.includes("L O R N A")
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

const isOcean = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("digitalocean") ||
    message.content.includes("D I G I T A L O C E A N")
  );
};

const isVonage = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("vonage") ||
    message.content.replace(/\s/g, "").toLowerCase().includes("nexmo") ||
    message.content.includes("V O N A G E") ||
    message.content.includes("N E X M O")
  );
};

const isTee = (message: Message): boolean => {
  return (
    message.content.replace(/\s/g, "").toLowerCase().includes("tee") ||
    message.content.replace(/\s/g, "").toLowerCase().includes("tshirt") ||
    message.content.includes("T E E") ||
    message.content.includes("T S H I R T ")
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
  // add response for Daniel
  if (isDaniel(message)) {
    const random = Math.floor(Math.random() * daniel.length);
    responses.push(daniel[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Hacktoberfest
  if (isHack(message)) {
    const random = Math.floor(Math.random() * hacktoberfest.length);
    responses.push(hacktoberfest[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for DigitalOcean
  if (isOcean(message)) {
    const random = Math.floor(Math.random() * ocean.length);
    responses.push(ocean[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Vonage
  if (isVonage(message)) {
    const random = Math.floor(Math.random() * vonage.length);
    responses.push(vonage[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Gabriel
  if (isGabriel(message)) {
    const random = Math.floor(Math.random() * gabriel.length);
    responses.push(gabriel[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Diana
  if (isDiana(message)) {
    const random = Math.floor(Math.random() * diana.length);
    responses.push(diana[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Lorna
  if (isLorna(message)) {
    const random = Math.floor(Math.random() * lorna.length);
    responses.push(lorna[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Ben
  if (isBen(message)) {
    const random = Math.floor(Math.random() * ben.length);
    responses.push(ben[random]);
    toSay = true;
    timer = Date.now();
  }
  // add response for Kyle
  if (isKyle(message)) {
    const random = Math.floor(Math.random() * kyle.length);
    responses.push(kyle[random]);
    toSay = true;
    timer = Date.now();
  }

  // add response for Joe
  if (isJoe(message)) {
    const random = Math.floor(Math.random() * joe.length);
    responses.push(joe[random]);
    toSay = true;
    timer = Date.now();
  }

  // add response for tshirt
  if (isTee(message)) {
    message.channel.send("TREES > TEES");
    toSay = false;
    timer = Date.now();
  }

  // If we should say something. add the reaction and join all the responses in one message
  if (toSay) {
    message.react("💜");
    message.channel.send(responses.join("\n"));
  }
});
