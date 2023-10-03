import { assert } from "chai";
import { ApplicationCommandOptionType, ChannelType } from "discord.js";
import {
  MockChannel,
  MockChatInputCommandInteraction,
  MockGuild,
  MockMember,
  MockUser
} from "discordjs-testing";

import { token } from "../../src/commands/token";

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

suite("token command", () => {
  test("handles missing user token", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "report",
      guild,
      bot,
      user,
      member,
      channel,
      options: [
        {
          name: "token",
          value: "fake",
          type: ApplicationCommandOptionType.String
        }
      ]
    });
    await token.run({ reportTokens: {} } as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    assert.equal(command.replies[0].content, "Your token is invalid.");
  });
});
