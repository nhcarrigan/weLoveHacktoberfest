import { assert } from "chai";
import { ChannelType } from "discord.js";
import {
  MockChannel,
  MockChatInputCommandInteraction,
  MockGuild,
  MockMember,
  MockUser
} from "discordjs-testing";

import { onInteraction } from "../../src/events/onInteractionCreate";

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

suite("onInteractionCreate event", () => {
  test("should handle invalid slash command", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "invalid",
      guild,
      bot,
      user,
      member,
      channel
    });
    await onInteraction({ commands: [] } as never, command as never);
    assert.equal(command.replies.length, 1);
    assert.equal(
      command.replies[0].content,
      "That does not appear to be a valid slash command..."
    );
  });
});
