import { assert } from "chai";
import {
  ApplicationCommandOptionType,
  ChannelType,
  EmbedBuilder
} from "discord.js";
import {
  MockChannel,
  MockChatInputCommandInteraction,
  MockGuild,
  MockMember,
  MockUser
} from "discordjs-testing";

import { onMessage } from "../../src/events/onMessage";

const guild = new MockGuild({
  name: "Test Guild"
});
const bot = new MockUser({
  username: "Test Bot",
  avatar: "test",
  discriminator: 1234,
  bot: true,
  system: false
});
const user = new MockUser({
  username: "Test User",
  avatar: "test",
  discriminator: 1234,
  bot: false,
  system: false
});
const member = new MockMember({
  guild,
  user
});
const channel = new MockChannel({
  name: "test-channel",
  guild,
  type: ChannelType.GuildText
});

suite("onMessage event", () => {
  test("should do nothing on bots", async () => {
    const message = await channel.send("Beep Boop", bot);
    await onMessage(message as never, {} as never);
    assert.equal(channel.messages.cache.size, 1);
    assert.isFalse(message.deleted);
  });

  test("should delete message from project channel when no link", async () => {
    guild.members.add(bot);
    const botMem = guild.members.cache.get(bot.id);
    // @ts-expect-error Mocking
    botMem.permissionsIn = () => ({
      has: () => true
    });
    process.env.PROJECT_CHANNEL = channel.id;
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";
    const message = await channel.send("Beep Boop", user);
    await onMessage(message as never, { user: bot } as never);
    assert.equal(channel.messages.cache.size, 3);
    assert.isTrue(message.deleted);
    delete process.env.PROJECT_CHANNEL;
    process.env.NODE_ENV = oldEnv;
  });

  test("should respond with love", async () => {
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";
    const message = await channel.send("Naomi", user);
    // @ts-expect-error Mocking
    message.react = () => Promise.resolve();
    await onMessage(message as never, {} as never);
    assert.equal(channel.messages.cache.size, 5);
    assert.isFalse(message.deleted);
    const embed = channel.messages.cache.last()?.embeds?.[0] as EmbedBuilder;
    assert.equal(embed.data.title, "Spread the Love!");
    if (process.env.NODE_ENV === "development") {
      process.env.NODE_ENV = oldEnv;
    }
  });
});
