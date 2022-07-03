const github = 'https://github.com/developer-dao/web3-ui';

export default {
  github,
  projectLink: github, // GitHub link in the navbar
  titleSuffix: ' – Web3-UI',
  docsRepositoryBase: 'https://github.com/Developer-DAO/web3-ui/tree/main/docs', // base URL for the docs repository
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Developer DAO`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>web3-ui</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="web3-ui: a library of UI components specifically crafted for web3 use cases"
      />
      <meta
        name="og:title"
        content="web3-ui: a library of UI components specifically crafted for web3 use cases"
      />
    </>
  ),
};
