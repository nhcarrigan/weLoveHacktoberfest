import express from "express";
import http from "http";

export const onReady = (): void => {
  console.log("Discord is ready!");

  const endpoint = express();

  endpoint.use((req, res) => {
    res.status(200).send("We love hacktoberfest!");
  });

  const server = http.createServer(endpoint);

  server.listen(5000, () => {
    console.log("Monitor endpoint is ready on port 5000!");
  });
};
