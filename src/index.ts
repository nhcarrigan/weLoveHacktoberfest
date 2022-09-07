import { RewriteFrames } from "@sentry/integrations";
import * as Sentry from "@sentry/node";
import { Client } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteractionCreate";
import { onMessage } from "./events/onMessage";
import { onReady } from "./events/onReady";
import { Bot } from "./interfaces/Bot";
import { errorHandler } from "./utils/errorHandler";
import { loadCommands } from "./utils/loadCommands";
import { logHandler } from "./utils/logHandler";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
      root: global.__dirname,
    }),
  ],
});

(async () => {
  try {
    const client = new Client({
      intents: IntentOptions,
    }) as Bot;
    const token = process.env.TOKEN;

    client.timer = 0;
    const cooldown = parseInt(process.env.COOLDOWN || "30000");
    client.cooldown = isNaN(cooldown) ? 30000 : cooldown;
    client.homeGuild = process.env.HOME_GUILD || "";
    client.commands = await loadCommands();

    if (!token) {
      logHandler.log("error", "Missing Discord Token");
      process.exit(1);
    }

    client.on(
      "messageCreate",
      async (message) => await onMessage(message, client)
    );

    client.on("interactionCreate", async (interaction) => {
      await onInteraction(client, interaction);
    });

    client.on("ready", async () => await onReady(client));

    await client.login(token);
  } catch (err) {
    await errorHandler("initialisation", err);
  }
})();
