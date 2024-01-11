import { assert } from "chai";

import { Bot } from "../../src/interfaces/Bot";
import { errorHandler } from "../../src/utils/errorHandler";

const fakeClient = {
  debugHook: {
    messages: [] as unknown[],
    send: (message: unknown) => fakeClient.debugHook.messages.push(message)
  }
};

const error = new Error("test");

suite("errorHandler", () => {
  test("sends a message to the webhook", async () => {
    const typeCastClient = fakeClient as unknown as Bot;
    await errorHandler(typeCastClient, "test", error);
    assert.lengthOf(fakeClient.debugHook.messages, 1);
  });

  test("sends the correct embed data", () => {
    assert.deepEqual(fakeClient.debugHook.messages, [
      {
        avatarURL: "https://cdn.nhcarrigan.com/avatars/nhcarrigan.png",
        embeds: [
          {
            data: {
              title: "Error in `test`!",
              description: `\`\`\`${error.stack}\`\`\``,
              fields: [
                {
                  name: "Message",
                  value: error.message
                }
              ]
            }
          }
        ],
        username: "Hacktoberfest"
      }
    ]);
  });

  test("handles a string error", async () => {
    await errorHandler(fakeClient as never, "test", "test");
    assert.lengthOf(fakeClient.debugHook.messages, 2);
    assert.deepEqual(fakeClient.debugHook.messages[1], {
      avatarURL: "https://cdn.nhcarrigan.com/avatars/nhcarrigan.png",
      embeds: [
        {
          data: {
            title: "Error in `test`!",
            description: "```No stack trace available.```",
            fields: [
              {
                name: "Message",
                value: "No message available."
              }
            ]
          }
        }
      ],
      username: "Hacktoberfest"
    });
  });
});
