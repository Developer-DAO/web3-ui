# React Library Boilerplate

This react library boilerplate uses the following:

- [Typescript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [StyleLint](https://stylelint.io/)
- [Storybook](https://storybook.js.org/)
- [SCSS](https://sass-lang.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Semantic Release](https://semantic-release.gitbook.io/)
- [Github Actions](https://github.com/features/actions)
- [Hygen](https://www.hygen.io/)

## Setup

1. Edit the `package.json` file. Set you app's name, description, version, author, homepage, bugs, and repository fields with the correct information.
1. Run `yarn` to add all the project's dependencies.
1. You package.json file version should always be 0.0.0 since Semantic Release will automatically set this upon publishing.

## Basic Folder Structure

```
├── .storybook
├── src
│   ├── components
|   |   ├── Example
|   |   |   ├── __tests__
|   |   |   |   ├── Example.test.tsx
|   |   |   ├── example.scss
|   |   |   ├── Example.stories.tsx
|   |   |   ├── Example.tsx
|   |   |   ├── index.ts
|   |   ├── index.ts
|   ├── index.ts
├── LICENSE
├── package.json
├── README.md
```

## Add a new component

- You can automatically create a new component using the `yarn component:new` command.
- Or, you can manually add the new component directory in the `src/components` directory following this folder structure

```
├── MyComponent
|   ├── __tests__
|   |   ├── MyComponent.test.tsx
|   ├── MyComponent.scss
|   ├── MyComponent.stories.tsx
|   ├── MyComponent.tsx
|   ├── index.ts

```

Once you have created your new component make sure you have exported it in the `src/components/index.ts` file. Doing so allows the component to be compiled into the final bundle using rollup.

```
// src/components/index.ts
export \* from './MyComponent';
export \* from './SomeOtherComponent';

```

> You can skip all of this and use the built in component generator. The template for the component is in `_templates/component/with-prompt`. Simply run the following command to automatically create your new component. It will prompt you for the component name and then build out all the files and correct exports.`yarn component:new`

You can develop your new component using storybook as your playground. Once you have added the `.stories.tsx` file for you new component, you can run `yarn storybook` to start the service.

## Tests

```

$ yarn test

```

With coverage

```

$ yarn test:coverage

```

Watch

```

$ yarn test:watch

```

## Prettier

```

$ yarn format

```

Validate project formatting

```

$ yarn format:check

```

## Lint

```

$ yarn lint

```

## Storybook

```

$ yarn storybook

```

## Building your library

```

$ yarn build

```

The build output will go into the `dist` directory

## Github Actions

This project contains a github action workflow called `ci.yaml`. This workflow runs a job that will test, lint, and build the code. If the code passes and you are on the `master` branch it will also run the publish job to send the new version off to npm.

## Publishing your Library on NPM

Once you have created an account on NPM create a publish key and add it to your github secrets as `NPM_TOKEN`. You will also need to create another secret called `SEMANTIC_RELEASE_TOKEN`. This token should be a personal access token that has the following scopes: `repo(all)`. [Semantic Release](https://semantic-release.gitbook.io/) will take care of the publishing and versioning for you via the `.github/workflows/ci.yaml` `Publish` job. In addition to publishing to NPM it will also create a new tag and release with commit messages in the repo.

> Note: You will need to update the package.json name property with the correct name your library will be using on npm.

## Committing Code Changes

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) commit message format.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (this correlates with `PATCH` in semantic versioning)
- **ci**: Changes to our CI configuration files and scripts (no version changes)
- **docs**: Documentation only changes (no version changes)
- **feat**: A new feature (this correlates with `MINOR` in semantic versioning).
- **fix**: A bug fix (this correlates with `PATCH` in semantic versioning).
- **perf**: A code change that improves performance (this correlates with `PATCH` in semantic versioning).
- **refactor**: A code change that neither fixes a bug nor adds a feature (no version changes)
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) (no version changes)
- **test**: Adding missing tests or correcting existing tests (no version changes)
- **revert**: Reverts a previous commit (this correlates with `PATCH` in semantic versioning).

#### Description

The Description contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body (optional)

Use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer (optional)

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

### Breaking Changes

A commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Examples

[see examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

---

## Changelog

The changelog.md is automatically generated from the following types of commits:

- `feat`
- `fix`
- `perf`
- `revert`

In addition to these types, any `breaking change` will also be added to the changelog.
