import { Bot } from "../interfaces/Bot";
import { errorHandler } from "../utils/errorHandler";

interface params {
  repo: string;
  owner: string;
  userId: string;
}

const threeDays = 1000 * 60 * 60 * 24 * 3;

/**
 * Checks if the database contains the specified project for the user.
 * Creates it if not.
 *
 * @param {Bot} client The bot's Discord instance.
 * @param {params} opts The userId, repo, and owner.
 * @returns {boolean} True if already present, false if not. Null on error.
 */
export const isInDatabase = async (
  client: Bot,
  opts: params
): Promise<boolean | null> => {
  try {
    const exists = await client.db.links.findUnique({
      where: {
        userId_repo_owner: opts,
      },
    });
    if (exists) {
      // return true only if exists and hasn't been three days since last sent
      if (exists.lastSent.getTime() + threeDays > Date.now()) {
        return true;
      }
      // need to update here, create call would fail because of unique index
      await client.db.links.update({
        where: {
          userId_repo_owner: opts,
        },
        data: {
          lastSent: new Date(),
        },
      });
      return false;
    }
    await client.db.links.create({
      data: opts,
    });
    return false;
  } catch (err) {
    await errorHandler("isInDatabase", err);
    return null;
  }
};
