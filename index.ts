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
  "Legend has it that when Matt looks you in the eyes, you see the universe.",
  "Legend has it that when Matt walks in a room, music starts playing.",
  "Legend has it that when Matt snaps his fingers, all bugs disappear.",
  "Matt is soo Cool!",
  "Matt is a Hero!",
  "Matt is a Star!",
  "Matt is Legendary!",
  "Matt is 11/10!",
  "Matt is Superb!",
  "Matt is Wholesome!",
  "Be like Matt, be Amazing",
  "Matt does everything so well!",
  "We all aspire to be Matt!",
  "Everything is Matt-tastic!",
  "Matt (noun): An amazing person!",
  "Matt (noun): An Astonishing person!",
  "Matt (noun): A Remarkable person!",
  "Matt (noun): A Spectacular person!",
  "Matt (noun): An Incredible person!",
  "Matt (noun): An Extraordinary person!",
  "Matt (noun): A Sensational person!",
  "Matt (noun): A Marvelous person!",
  "Matt (noun): A Wonderful person!",
  "Matt (noun): A Thrilling person!",
  "Matt (noun): A Fantastic person!",
  "Matt (noun): A Terrific person!",
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
