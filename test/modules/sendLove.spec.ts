import { assert } from "chai";
import { ChannelType, EmbedBuilder } from "discord.js";
import { MockChannel, MockGuild, MockUser } from "discordjs-testing";
import { after, before } from "mocha";

import { sendLove } from "../../src/modules/sendLove";

const guild = new MockGuild({
  name: "Test Guild"
});
const user = new MockUser({
  username: "Test User",
  avatar: "test",
  discriminator: 1234,
  bot: false,
  system: false
});
const channel = new MockChannel({
  name: "test-channel",
  guild,
  type: ChannelType.GuildText
});

suite("sendLove module", () => {
  const oldEnv = process.env.NODE_ENV;
  before(() => {
    process.env.NODE_ENV = "development";
  });

  test("does nothing if no loves", async () => {
    const message = await channel.send("Beep Boop", user);
    await sendLove({} as never, message as never);
    assert.equal(channel.messages.cache.size, 1);
    assert.equal(channel.messages.cache.last()?.content, "Beep Boop");
  });

  test("sends message when matching love", async () => {
    const message = await channel.send("Naomi", user);
    // @ts-expect-error Mocking
    message.react = () => Promise.resolve();
    await sendLove({} as never, message as never);
    assert.equal(channel.messages.cache.size, 3);
    const embed = channel.messages.cache.last()?.embeds?.[0] as EmbedBuilder;
    assert.equal(embed.data.title, "Spread the Love!");
  });

  after(() => {
    process.env.NODE_ENV = oldEnv;
  });
});
