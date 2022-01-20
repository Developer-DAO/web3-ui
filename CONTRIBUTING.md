# Contributing

Contributions are welcome!

1. Check the [ISSUES](https://github.com/Developer-DAO/web3-ui/issues). Read every issue to understand what's needed and whether it's something you can help with.

2. Ask other contributors to see if no one has taken the issue yet. If you're interested in tackling such a feature and it's still available, we will assign you to the task.

3. Clone the repo and create your own branch using `git checkout -b your_branch_name`. Remember to use a branch name that describes WHAT you're doing/fixing.

4. Setup your local development environment. Instructions [here](#local-development).

5. Once your work is done with the local copy of the repo, don't hesitate to open a pull request. We'll gladly revise and push as deemed fit.

6. Feel free to add new issues as you read the code and find inconsistencies and/or possible features that may add up to the website. Follow the labeling standards to make it easier to understand what you're proposing.

7. Document changes and/or issues clearly. Make it easy for everyone involved to understand your ideas/changes.

If you are developing on Windows see [this](/CONTRIBUTING_ON_WINDOWS.md) page for help on getting your environment setup.

## Local development

To setup your local dev environment:

```sh
# Install `yarn`, alternatives at https://yarnpkg.com/en/docs/install
curl -o- -L https://yarnpkg.com/install.sh | bash

# Clone the repo
git clone git@github.com:Developer-DAO/web3-ui.git
cd web3-ui

# web3-ui uses Node 16. We recommend using nvm to locally manage node versions.
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
nvm install
# yarn install also runs `preconstruct dev`, which dynamically links all
# packages in the monorepo together.
yarn install
```

To verify setup, run the Storybook with `yarn storybook`. You can develop new or existing components/hooks and verify functionality in the Storybook.

Run all unit tests with `yarn test`. Run unit tests on only the package you're working on with `yarn test packages/<PACKAGE_NAME_HERE>`.

We use `husky` for pre-commit hooks to verify files are properly linted prior to committing. This will run automatically whenever adding or amending a commit.

## Creating a pull request

When you create a pull request a `changeset-bot` will tell you that you need to create a changeset, if your change has an effect on the published packages
all you need to do is run `yarn changeset` at the root. This will ask you whether your change is a patch (fixes a bug), a minor (adds a feature) or a major (breaking change)
select the one that applies and describe the change you did. This is used to automate our changelogging.
