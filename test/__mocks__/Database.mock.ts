import { links } from "@prisma/client";

class Link {
  private _records: links[] = [];

  public async findUnique(options): Promise<links | null> {
    return (
      this._records.find(
        (record) =>
          record.userId === options.where.userId_repo_owner.userId &&
          record.owner === options.where.userId_repo_owner.owner &&
          record.repo === options.where.userId_repo_owner.repo
      ) ?? null
    );
  }

  public async create(options): Promise<links | null> {
    this._records.push({ ...options.data, lastSent: new Date() });
    return this.findUnique({
      where: {
        userId_repo_owner: {
          userId: options.data.userId,
          owner: options.data.owner,
          repo: options.data.repo
        }
      }
    });
  }

  public async findMany(): Promise<links[]> {
    return this._records;
  }

  public async delete(options) {
    const index = this._records.findIndex(
      (record) =>
        record.userId === options.where.userId &&
        record.owner === options.where.owner &&
        record.repo === options.where.repo
    );
    if (index === -1) {
      throw new Error("User not found");
    }
    this._records.splice(index, 1);
  }

  public async upsert(options) {
    const exists = await this.findUnique({
      where: {
        userId_repo_owner: {
          userId: options.data.userId,
          owner: options.data.owner,
          repo: options.data.repo
        }
      }
    });
    if (exists) {
      for (const key of Object.keys(options.update)) {
        exists[key] = options.update[key];
      }
      return exists;
    }
    this._records.push(options.create);
    return this.findUnique({
      where: {
        userId_repo_owner: {
          userId: options.data.userId,
          owner: options.data.owner,
          repo: options.data.repo
        }
      }
    });
  }

  public async update(options) {
    const exists = await this.findUnique({
      where: {
        userId_repo_owner: {
          userId: options.where.userId_repo_owner.userId,
          owner: options.where.userId_repo_owner.owner,
          repo: options.where.userId_repo_owner.repo
        }
      }
    });
    if (!exists) {
      throw new Error("User not found");
    }
    for (const key of Object.keys(options.data)) {
      exists[key] = options.data[key];
    }
  }
}

/**
 * Mock database.
 *
 * @class
 */
export class Database {
  private _links: Link;

  /**
   * Constructor.
   */
  constructor() {
    this._links = new Link();
  }

  /**
   * Handles the user property.
   *
   * @type {Link}
   * @public
   */
  public get links(): Link {
    return this._links;
  }
}
