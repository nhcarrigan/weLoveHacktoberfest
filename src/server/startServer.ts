import express from "express";
import http from "http";
import https from "https";
import { readFile } from "fs/promises";
import { logHandler } from "../utils/logHandler";

export const startServer = async (): Promise<void> => {
  const app = express();

  // mount your middleware and routes here

  app.use("/", (req, res) => {
    res.send("hi");
  });

  const httpServer = http.createServer(app);

  httpServer.listen(2080, () => {
    logHandler.log("http", "http server listening on port 2080");
  });

  if (process.env.NODE_ENV === "production") {
    const privateKey = await readFile(
      "/etc/letsencrypt/live/hacktoberfest.nhcarrigan.com/privkey.pem",
      "utf8"
    );
    const certificate = await readFile(
      "/etc/letsencrypt/live/hacktoberfest.nhcarrigan.com/cert.pem",
      "utf8"
    );
    const ca = await readFile(
      "/etc/letsencrypt/live/hacktoberfest.nhcarrigan.com/chain.pem",
      "utf8"
    );

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(2443, () => {
      logHandler.log("http", "https server listening on port 2443");
    });
  }
};
