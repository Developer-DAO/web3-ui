# Contributing
Contributions are welcome! Please see https://github.com/Developer-DAO/web3-ui/issues for tasks to pick up.

## Local development
To setup your local dev environment:
```sh
# Install `yarn`, alternatives at https://yarnpkg.com/en/docs/install
curl -o- -L https://yarnpkg.com/install.sh | bash

# Fork web3-ui in the Github UI and clone it
git clone git@github.com:<GITHUB_USERNAME>/web3-ui.git
cd web3-ui

# web3-ui uses Node 16. We recommend using nvm to locally manage node versions.
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
nvm install
yarn install
```

To verify setup, run the Storybook with `yarn dev`. You can develop new or existing components and verify functionality in the Storybook.

Unit tests are run with `yarn test`.

We use `husky` for pre-commit hooks to verify files are properly linted prior to committing. This will run automatically whenever adding or amending a commit.
