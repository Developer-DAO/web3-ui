# Contributing

Contributions are welcome!

1. If you find a bug, create a new [ISSUE](https://github.com/Developer-DAO/web3-ui/issues) first before working on a solution.
2. Check the [ISSUES](https://github.com/Developer-DAO/web3-ui/issues) and comment on the issue if you'd like to take it on.
3. Please consider that if taking on a issue, and no communication has been made on it's progress for over a week, you are no longer working on the issue and is available for someone else to pick up to work on.

4. Create a fork of the repo.

5. Create your own branch using `git checkout -b your_branch_name`. Remember to use a branch name that describes WHAT you're doing/fixing. Start branch name with

   - feat: A new feature
   - fix: A bug fix
   - docs: Changes to documentation
   - style: Formatting, missing semi colons, etc; no code change
   - refactor: Refactoring production code
   - test: Adding tests, refactoring test; no production code change
   - chore: Updating build tasks, package manager configs, etc; no production code change

6. Setup your local development environment. Instructions [here](#local-development).

7. Once your work is done with the local copy of the repo, don't hesitate to open a pull request. We'll gladly revise and push as deemed fit.

8. Feel free to add new issues as you read the code and find inconsistencies and/or possible features that may add up to the website. Follow the labeling standards to make it easier to understand what you're proposing.

9. Document changes and/or issues clearly. Make it easy for everyone involved to understand your ideas/changes.

If you are developing on Windows see [this](/contributing/CONTRIBUTING_ON_WINDOWS.md) page for help on getting your environment setup.

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

A playground has been created to help with faster development. To start the playground run `yarn dev`. This will run 2 services, one a Next JS environment, which is found in the playground folder, for viewing and working with elements/components as the end user would, and another to watch for changes within the packages/components folder.

Storybook will be used as a reference for the end user of the library. All elements/components created should have a working storybook and test file associated.

To verify in Storybook, run with `yarn storybook`. You can view and develop new or existing elements/components and verify functionality in the Storybook.

Run all unit tests with `yarn test`. Run unit tests on only the package you're working on with `yarn test packages/<PACKAGE_NAME_HERE>`.

We use `husky` for pre-commit hooks to verify files are properly linted prior to committing. This will run automatically whenever adding or amending a commit.

## Creating a pull request

When you create a pull request a `changeset-bot` will tell you that you need to create a changeset, if your change has an effect on the published packages
all you need to do is run `yarn changeset` at the root. This will ask you whether your change is a patch (fixes a bug), a minor (adds a feature) or a major (breaking change)
select the one that applies and describe the change you did. This is used to automate our changelogging.
