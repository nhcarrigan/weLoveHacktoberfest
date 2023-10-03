import { assert } from "chai";
import { ChannelType } from "discord.js";
import { MockChannel, MockGuild, MockUser } from "discordjs-testing";

import { checkProject } from "../../src/modules/checkProject";

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
const channel = new MockChannel({
  name: "test-channel",
  guild,
  type: ChannelType.GuildText
});

suite("checkProject module", () => {
  test("does nothing if project channel not configured", async () => {
    delete process.env.PROJECT_CHANNEL;
    const message = await channel.send("Beep Boop", user);
    await checkProject({} as never, message as never, false);
    assert.equal(channel.messages.cache.size, 1);
    assert.isFalse(channel.messages.cache.last()?.deleted);
  });

  test("does nothing if not in project channel", async () => {
    process.env.PROJECT_CHANNEL = "fake";
    const message = await channel.send("Beep Boop", user);
    await checkProject({} as never, message as never, false);
    assert.equal(channel.messages.cache.size, 2);
    assert.isFalse(channel.messages.cache.last()?.deleted);
  });

  test("does nothing if bot cannot manage messages", async () => {
    process.env.PROJECT_CHANNEL = channel.id;
    const message = await channel.send("Beep Boop", user);
    await checkProject({} as never, message as never, false);
    assert.equal(channel.messages.cache.size, 3);
    assert.isFalse(channel.messages.cache.last()?.deleted);
  });

  test("deletes when no project link", async () => {
    guild.members.add(bot);
    const botMem = guild.members.cache.get(bot.id);
    // @ts-expect-error Mocking
    botMem.permissionsIn = () => ({
      has: () => true
    });
    const message = await channel.send("Beep Boop", user);
    await checkProject(
      { user: { id: bot.id } } as never,
      message as never,
      false
    );
    assert.equal(channel.messages.cache.size, 5);
    assert.isTrue(message.deleted);
    assert.equal(
      channel.messages.cache.last()?.content,
      `<@!${user.id}>, please don't post in this channel if you aren't sharing a project. Make sure you're sharing a GitHub/GitLab repository link, or a specific issue link.`
    );
  });

  test("does not delete when project link and edited", async () => {
    const message = await channel.send(
      "https://github.com/nhcarrigan/weLoveHacktoberfest",
      user
    );
    await checkProject(
      { user: { id: bot.id } } as never,
      message as never,
      // mark as edited because db isnt mocked yet
      true
    );
    assert.equal(channel.messages.cache.size, 6);
    assert.equal(
      channel.messages.cache.last()?.content,
      `https://github.com/nhcarrigan/weLoveHacktoberfest`
    );
  });

  test("deletes when too many links", async () => {
    const message = await channel.send(
      "https://github.com/nhcarrigan/weLoveHacktoberfest https://github.com/nhcarrigan/weLoveHacktoberfest https://github.com/nhcarrigan/weLoveHacktoberfest https://github.com/nhcarrigan/weLoveHacktoberfest https://github.com/nhcarrigan/weLoveHacktoberfest https://github.com/nhcarrigan/weLoveHacktoberfest",
      user
    );
    await checkProject(
      { user: { id: bot.id } } as never,
      message as never,
      // mark as edited because db isnt mocked yet
      false
    );
    assert.equal(channel.messages.cache.size, 8);
    assert.isTrue(message.deleted);
    assert.equal(
      channel.messages.cache.last()?.content,
      `<@!${user.id}>, please don't post many links at once, as this can be quite spammy.`
    );
  });
});
