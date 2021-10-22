# Contributing

Please ensure all pull requests and contributions comply with the [Developer Certificate of Origin](https://developercertificate.org/).

## Setting Up Your Code

First, fork this repository to your own account. Then use `git clone <url>` to bring your forked repository down to your local machine (remember to get the URL for _your_ repository, not the original). Optionally, use `git remote add upstream <url>` to add the original repository as the upstream (this is helpful for keeping your fork up-to-date).

Ensure your terminal is pointed to the root project directory. Then use `cp sample.env .env` to copy the environment variables template and configure the following:

- `TOKEN`: This is your Discord Bot Token. To get a Discord bot token, create an application on the [Discord Developer Portal](https://discord.com/developers/applications), add a bot to the application, and copy the token.
- `TARGET_CHANNEL`: This is the Discord ID for the channel the bot should restrict messages to.
- `NODE_ENV`: Set this to `production` to enable the channel lock and timeout features. Set this to `development` to disable them.
- `COOLDOWN`: Set this to the time, in `ms`, that the bot should wait before parsing a new message.

To prepare your code for changes, run `npm ci` to install the dependencies. Then, to test your changes, run `npm run build` to compile the TypeScript into JavaScript and `npm run start` to launch the application.

Before submitting a PR, run `npm run lint` to verify the code meets our standards.

## Claiming an Issue

All of our issues are open to contributors! If you see an open issue you would like to work on, please comment on the issue so we may assign it to you.

> NOTE: Assigned issues that have not had any activity in a week will be unassigned.

If an issue is already assigned, please look for another issue to contribute to.We use labels to help categorise issues:

- `good first issue` - These issues require minimal familiarity with our codebase. Please reserve these for first-time contributors.
- `help wanted` - These issues are open to any contributors.
- `staff only` - These issues are locked to project members/collaborators. Pull requests on these issues will not be accepted from outside contributors.

## Working on your issue

Before starting work, we highly recommend ensuring that your forked version is up to date. If you set the `upstream` as mentioned in [Setting Up Your Code](#setting-up-your-code), run these commands in your terminal (with the terminal pointed at the root directory of your local files):

- `git fetch upstream` - this gets the current state of the original repo, without pulling down the changes to your local machine.
- `git reset --hard upstream/main` - this resets the state of your local files to match the current state of the original repo.
- `git push -f` - this forces the changes to your forked repo (thus making it match the original)

> NOTE: You will lose any changes you are currently working on. Do this with care.

Next, use `git checkout -b <branchname>` to create a new branch for your work. It's always a good idea to avoid committing changes directly to your `main` branch - this keeps it clean and avoids errors when updating (above).

Branch names should follow a convention of `scope/issue?/description` where:

- `scope` is the nature of the changes (eg. `feat` for a new feature, or `docs` for documentation update). This should match the scope of the related issue.
- `issue` is the _number_ for the related issue you're addressing.
- `description` is a brief description of your changes, such as `update-contribs` for updating the contributing guidelines.

Now you are free to work on your code! When you are satisfied with your changes, you can commit them with `git commit -s -m "message"`, where:

- `-s` flag signs the commit, to verify the connection with your GitHub account.
- `-m` flag sets up the commit message.
- `message` is the commit message: a brief (50 character max) message describing what the commit changes.

## Submitting a Pull Request

Once you have all of your changes made and committed, you can push them to your forked repository! Use `git push -u origin <branchname>`, where:

- `-u` tells `git` to set the upstream (see below)
- `origin` tells `git` to push to your fork
- `branchname` tells `git` to push to a branch - this MUST match the name of the branch you created locally.

> NOTE: By setting the upstream, any subsequent `push` commands can be done with `git push`, and it will be pushed to the same branch.

Now you can open the pull request! You should see a quick option to do so appear at the top of your repository on GitHub. Click the "Pull Request" button to have GitHub automatically set up the pull request.

First, change the title of the pull request to match your branch name (following the conventions above!). Then, follow the instructions in the preset Pull Request template (make sure to complete any steps listed!).

Congratulations! You've submitted your first pull request! We will review it as quickly as possible, so keep an eye out for approvals (or requested changes).

## Adding Phrases to the Bot

To add new responses to the bot, navigate to the `src/data/phrases.ts` file. Within the array, add the phrases you'd like the bot to potentially respond with.

## Adding Hearts to the Bot

All of our hearts are generously provided by [Luke's DevHearts project](https://github.com/lukeocodes/dev-hearts). Before you add a heart to this project, you need to submit it there and have it approved. Be sure to follow their contributing guidelines!

Once your heart is approved and merged, add the *name* of your new heart file to the `src/data/hearts.ts` file - do *not* include the file extension.

## Adding new users

To add a new user to respond to, navigate to the `src/data/loveData.ts` file. Create a new object with the corresponding data - if you are adding a corporate sponsor, exclude the `id` field.

Then, add a new array with the user's phrases in `src/data/phrases.ts`.

## Managing Tags

The tags in the server are open source as part of this project, and can be managed right here on GitHub!

The `name` field is used to call the tag in Discord, with the syntax `hf.<name>`. The `content` field determines what the bot responds with.

When managing the content of a tag, the linter will complain if single quotes are used - double quotes and back ticks are acceptible. Multi-line content should be separated with the `\n` character, not actual line breaks.

## Other Contributions

If you aren't comfortable with the codebase, or would like to contribute in other ways, we have options for that!

- Documentation Updates: You are always welcome to update our documentation (like this file!) if you see any typos or anything that can be clarified.
- Feature Requests: If you have ideas for new features or improvements, feel free to open an issue!
- Bug Reports: We rely on our users to help identify bugs - if you see something wrong, please let us know with an issue!
