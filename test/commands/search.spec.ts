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

import { search } from "../../src/commands/search";

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

suite("search command", () => {
  test("should return a GitHub search link", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "search",
      guild,
      bot,
      user,
      member,
      channel,
      options: [
        {
          name: "vcs",
          value: "github",
          type: ApplicationCommandOptionType.String
        },
        {
          name: "lang",
          value: "typescript",
          type: ApplicationCommandOptionType.String
        }
      ]
    });
    await search.run({} as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    const embed = command.replies[0]?.embeds?.[0] as EmbedBuilder;
    assert.exists(embed);
    assert.equal(embed.data.title, "typescript projects on github");
    assert.equal(
      embed.data.description,
      "[Click here to view typescript projects on github](https://github.com/search?q=topic%3Ahacktoberfest%20language%3Atypescript&type=repositories)"
    );
    assert.equal(embed.data.color, 0x3178c6);
    assert.equal(
      embed.data.footer?.text,
      "Join our server: https://chat.nhcarrigan.com"
    );
    assert.equal(
      embed.data.footer?.icon_url,
      "https://cdn.nhcarrigan.com/profile.png"
    );
  });

  test("should return a GitLab search link", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "search",
      guild,
      bot,
      user,
      member,
      channel,
      options: [
        {
          name: "vcs",
          value: "gitlab",
          type: ApplicationCommandOptionType.String
        },
        {
          name: "lang",
          value: "typescript",
          type: ApplicationCommandOptionType.String
        }
      ]
    });
    await search.run({} as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    const embed = command.replies[0]?.embeds?.[0] as EmbedBuilder;
    assert.exists(embed);
    assert.equal(embed.data.title, "typescript projects on gitlab");
    assert.equal(
      embed.data.description,
      "[Click here to view typescript projects on gitlab](https://gitlab.com/explore/projects/topics/hacktoberfest?language=19)"
    );
    assert.equal(embed.data.color, 0x3178c6);
    assert.equal(
      embed.data.footer?.text,
      "Join our server: https://chat.nhcarrigan.com"
    );
    assert.equal(
      embed.data.footer?.icon_url,
      "https://cdn.nhcarrigan.com/profile.png"
    );
  });
});
