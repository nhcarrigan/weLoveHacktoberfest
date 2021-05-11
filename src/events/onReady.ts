import express from "express";
import http from "http";
import { ExtendedClientInterface } from "../interfaces/ExtendedClientInterface";
import { errorHandler } from "../utils/errorHandler";

export const onReady = (client: ExtendedClientInterface): void => {
  try {
    console.log("Discord is ready!");

    process.env.NODE_ENV === "production"
      ? console.info(
          "Bot is in production mode - channel lock and cooldown are active."
        )
      : console.warn(
          "Bot is NOT in production mode - if this a live instance, please set NODE_ENV to 'production'. Protections are disabled otherwise."
        );

    console.info(`Cooldown is set to ${client.cooldown / 1000} seconds.`);

    const endpoint = express();

    endpoint.use((req, res) => {
      res.status(200).send("We love hacktoberfest!");
    });

    const server = http.createServer(endpoint);

    server.listen(5000, () => {
      console.log("Monitor endpoint is ready on port 5000!");
    });
  } catch (err) {
    errorHandler("ready event", err);
  }
};
