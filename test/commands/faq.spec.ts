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

import { faq } from "../../src/commands/faq";

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

suite("faq command", () => {
  test("should handle an invalid faq", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "faq",
      guild,
      bot,
      user,
      member,
      channel,
      options: [
        {
          name: "question",
          value: "naomi",
          type: ApplicationCommandOptionType.String
        }
      ]
    });
    await faq.run({} as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    assert.equal(command.replies[0].content, "No tag found for `naomi`.");
  });

  test("should return an embed for a valid faq", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "faq",
      guild,
      bot,
      user,
      member,
      channel,
      options: [
        {
          name: "question",
          value: "How do I contribute?",
          type: ApplicationCommandOptionType.String
        }
      ]
    });
    await faq.run({} as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    const embed = command.replies[0]?.embeds?.[0] as EmbedBuilder;
    assert.exists(embed);
    assert.strictEqual(embed.data.title, "How do I contribute?");
    assert.strictEqual(
      embed.data.description,
      "You can contribute to any repo with the hacktoberfest label, or repos using the `hacktoberfest-accepted` label on individual PRs/MRs. You can find these by searching on either [GitHub](https://github.com/topics/hacktoberfest) or [GitLab](https://gitlab.com/explore/projects/topics/hacktoberfest).\n\nYou can contribute both code and low-code. See also [GitHub's guide](https://opensource.guide/how-to-contribute/) for contributing if you're not sure how. The [Hacktoberfest website](https://hacktoberfest.com/participation/#contributors) also contains some resources to help you get started."
    );
    assert.equal(
      embed.data.footer?.text,
      "Join our server: https://chat.nhcarrigan.com"
    );
    assert.equal(
      embed.data.footer?.icon_url,
      "https://cdn.nhcarrigan.com/profile.png"
    );
    assert.isUndefined(command.replies[0].content);
  });

  test("should mention a user if provided", async () => {
    const command = new MockChatInputCommandInteraction({
      commandName: "faq",
      guild,
      bot,
      user,
      member,
      channel,
      options: [
        {
          name: "question",
          value: "How do I contribute?",
          type: ApplicationCommandOptionType.String
        },
        {
          name: "user",
          value: user,
          type: ApplicationCommandOptionType.User
        }
      ]
    });
    await faq.run({} as never, command.typeCast());
    assert.lengthOf(command.replies, 1);
    const embed = command.replies[0]?.embeds?.[0] as EmbedBuilder;
    assert.exists(embed);
    assert.strictEqual(embed.data.title, "How do I contribute?");
    assert.strictEqual(
      embed.data.description,
      "You can contribute to any repo with the hacktoberfest label, or repos using the `hacktoberfest-accepted` label on individual PRs/MRs. You can find these by searching on either [GitHub](https://github.com/topics/hacktoberfest) or [GitLab](https://gitlab.com/explore/projects/topics/hacktoberfest).\n\nYou can contribute both code and low-code. See also [GitHub's guide](https://opensource.guide/how-to-contribute/) for contributing if you're not sure how. The [Hacktoberfest website](https://hacktoberfest.com/participation/#contributors) also contains some resources to help you get started."
    );
    assert.equal(
      embed.data.footer?.text,
      "Join our server: https://chat.nhcarrigan.com"
    );
    assert.equal(
      embed.data.footer?.icon_url,
      "https://cdn.nhcarrigan.com/profile.png"
    );
    assert.include(command.replies[0].content, `<@!${user.id}>`);
  });
});
