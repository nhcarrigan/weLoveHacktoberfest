import { assert } from "chai";
import { ChannelType } from "discord.js";
import {
  MockChannel,
  MockGuild,
  MockMember,
  MockUser
} from "discordjs-testing";

import { onMessageEdit } from "../../src/events/onMessageEdit";

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

suite("onMessageEdit event", () => {
  test("should do nothing on bots", async () => {
    const message = await channel.send("Beep Boop", bot);
    await onMessageEdit(message as never, {} as never);
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
    await onMessageEdit(message as never, { user: bot } as never);
    assert.equal(channel.messages.cache.size, 3);
    assert.isTrue(message.deleted);
    delete process.env.PROJECT_CHANNEL;
    process.env.NODE_ENV = oldEnv;
  });
});
