# Contributing
Contributions are welcome! Please see https://github.com/Developer-DAO/web3-ui/issues for tasks to pick up.

If you developing on Windows see [this](/CONTRIBUTING_ON_WINDOWS.md) page for help on getting your environment setup

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

To verify setup, run the Storybook with  `yarn storybook`. You can develop new or existing components/hooks and verify functionality in the Storybook.

Run all unit tests with `yarn test`. Run unit tests on only the package you're working on with `yarn test packages/<PACKAGE_NAME_HERE>`.

We use `husky` for pre-commit hooks to verify files are properly linted prior to committing. This will run automatically whenever adding or amending a commit.
