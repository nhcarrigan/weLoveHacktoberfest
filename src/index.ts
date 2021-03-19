import { Client, Message } from "discord.js";

const client = new Client();
const token = process.env.TOKEN;
const timer = 0;

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

  const responses: string[] = [];
  const toSay = false;

  /**
   * Push to responses
   * make toSay true
   * timer = date.now
   */

  // If we should say something. add the reaction and join all the responses in one message
  if (toSay) {
    message.react("💜");
    message.channel.send(responses.join("\n"));
  }
});
