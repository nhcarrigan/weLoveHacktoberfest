"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.Client();
var token = process.env.TOKEN;
client
    .login(token)
    .then(function () { return console.log("It's alive!"); })
    .catch(function (err) { return console.error(err); });
client.on("message", function (message) {
    if (message.content.toLowerCase().includes("matt") || message.author.id === "541305895544422430") {
        message.channel.send("We love <@!541305895544422430>!");
        message.react("💜");
    }
});
