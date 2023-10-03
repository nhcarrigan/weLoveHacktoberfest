import { assert } from "chai";
import { ApplicationCommandOptionType, ChannelType } from "discord.js";
import {
  MockChannel,
  MockChatInputCommandInteraction,
  MockGuild,
  MockMember,
  MockUser
} from "discordjs-testing";

import { report } from "../../src/commands/report";

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

suite("report command", () => {
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
          name: "provider",
          value: "GitHub",
          type: ApplicationCommandOptionType.String
        },
        {
          name: "owner",
          value: "test",
          type: ApplicationCommandOptionType.String
        },
        {
          name: "repo",
          value: "test",
          type: ApplicationCommandOptionType.String
        }
      ]
    });
    await report.run({ reportTokens: {} } as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    assert.equal(
      command.replies[0].content,
      "You must set your token before reporting a repository. Please use `/token` to set your token."
    );
  });
});
