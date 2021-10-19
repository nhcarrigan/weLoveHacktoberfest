import http from "http";

import express from "express";

import { Bot } from "../interfaces/Bot";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

/**
 * Handles the ready event (when the bot connects to Discord).
 *
 * @param {Bot} client The client object.
 */
export const onReady = (client: Bot): void => {
  try {
    logHandler.log("debug", "Discord is ready!");

    process.env.NODE_ENV === "production"
      ? logHandler.log(
          "info",
          "Bot is in production mode - channel lock and cooldown are active."
        )
      : logHandler.log(
          "warn",
          "Bot is NOT in production mode - if this a live instance, please set NODE_ENV to 'production'. Protections are disabled otherwise."
        );

    logHandler.log(
      "debug",
      `Cooldown is set to ${client.cooldown / 1000} seconds.`
    );

    const endpoint = express();

    endpoint.use((req, res) => {
      res.status(200).send("We love hacktoberfest!");
    });

    const server = http.createServer(endpoint);

    server.listen(5000, () => {
      logHandler.log("http", "Monitor endpoint is ready on port 5000!");
    });
  } catch (err) {
    errorHandler("ready event", err);
  }
};
