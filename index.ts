import { Client, Message } from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const client = new Client();
const token = process.env.TOKEN;

const phrases = [
  "We Love Matt!",
  "Matt is Awesome!",
  "Matt is the Best!",
  "All hail Matt!",
  "Matt is sooo Amazing!",
  "Matt is Astounding!",
  "Matt is Astonishing!",
  "Matt is Remarkable!",
  "Matt is Spectacular!",
  "Matt is Incredible!",
  "Matt is Extraordinary!",
  "Matt is Sensational!",
  "Matt is Marvelous!",
  "Matt is a Genius!",
  "Matt is Wonderful!",
  "Matt is Majestic!",
  "Matt is Mind-blowing!",
  "Matt is Thrilling!",
  "Matt is Fantastic!",
  "Matt is Terrific!",
  "Matt is Epic!",
  "Matt is Pog!",
];

let timer = 0;

client
  .login(token)
  .then(() => console.log("It's alive!"))
  .catch((err) => console.error(err));

client.on("message", (message: Message) => {
  if (Date.now() - timer <= 30000) {
    return;
  }
  if (message.author.id === client.user?.id) {
    return;
  }
  if (message.channel.id !== "762002255327002654") {
    return;
  }
  if (
    message.content.toLowerCase().includes("matt") ||
    message.author.id === "541305895544422430"
  ) {
    const random = Math.floor(Math.random() * phrases.length);
    message.channel.send(phrases[random]);
    message.react("💜");
    timer = Date.now();
  }
});
