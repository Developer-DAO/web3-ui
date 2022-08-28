# web3-ui

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-40-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

_In Development - Refactoring in Progress 🏗️_

A library of UI components specifically crafted for web3 use cases.

| Package name                                                                                       | Current version                                                                                                      |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [(Deprecated) `@web3-ui/core`](https://github.com/Developer-DAO/web3-ui/tree/main/packages/core)   | [![npm version](https://badge.fury.io/js/@web3-ui%2Fcore.svg)](https://badge.fury.io/js/@web3-ui%2Fcore)             |
| [`@web3-ui/components`](https://github.com/Developer-DAO/web3-ui/tree/main/packages/components)    | [![npm version](https://badge.fury.io/js/@web3-ui%2Fcomponents.svg)](https://badge.fury.io/js/@web3-ui%2Fcomponents) |
| [(Deprecated) `@web3-ui/hooks`](https://github.com/Developer-DAO/web3-ui/tree/main/packages/hooks) | [![npm version](https://badge.fury.io/js/@web3-ui%2Fhooks.svg)](https://badge.fury.io/js/@web3-ui%2Fhooks)           |

## Quick start

### Note: This is for the current public release. This library is being refactored and instructions will change.

1. Install the package

```bash
$ yarn add @web3-ui/core ethers
```

2. Setup the Provider

```tsx
import { Provider, NETWORKS } from '@web3-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <Provider network={NETWORKS.mainnet}>
      <Component {...pageProps} />
    </Provider>
  );
}
```

3. Use the components and hooks

```tsx
import { ConnectWallet, useWallet } from '@web3-ui/core';

function Home() {
  const { connection } = useWallet();

  return (
    <div>
      <ConnectWallet />
      <div>{connection.ens || connection.userAddress}</div>
    </div>
  );
}
```

## Roadmap

Please see the [Roadmap](/contributing/ROADMAP.md) for more details

## How to Contribute

Read the [CONTRIBUTING GUIDELINES](/CONTRIBUTING.md).

## The motive behind this package

- [RFC: web3-ui (a web3-specific UI library)](https://forum.developerdao.com/t/rfc-web3-ui-a-web3-specific-ui-library/565)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://erikritter.io"><img src="https://avatars.githubusercontent.com/u/7409244?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Erik Ritter</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=etr2460" title="Code">💻</a> <a href="https://github.com/Developer-DAO/web3-ui/pulls?q=is%3Apr+reviewed-by%3Aetr2460" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/crondinini"><img src="https://avatars.githubusercontent.com/u/21973269?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Camila Rondinini</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=crondinini" title="Code">💻</a> <a href="https://github.com/Developer-DAO/web3-ui/pulls?q=is%3Apr+reviewed-by%3Acrondinini" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://dhaiwat.com"><img src="https://avatars.githubusercontent.com/u/39617427?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhaiwat Pandya</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=Dhaiwat10" title="Code">💻</a> <a href="https://github.com/Developer-DAO/web3-ui/pulls?q=is%3Apr+reviewed-by%3ADhaiwat10" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://nazeeh.dev/"><img src="https://avatars.githubusercontent.com/u/56908732?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nazeeh Vahora</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=Nazeeh21" title="Code">💻</a> <a href="https://github.com/Developer-DAO/web3-ui/commits?author=Nazeeh21" title="Documentation">📖</a></td>
    <td align="center"><a href="https://zanzeta.com"><img src="https://avatars.githubusercontent.com/u/48886275?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jose L. Velez</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=joselvelez" title="Documentation">📖</a> <a href="https://github.com/Developer-DAO/web3-ui/commits?author=joselvelez" title="Code">💻</a></td>
    <td align="center"><a href="https://with-heart.me/"><img src="https://avatars.githubusercontent.com/u/1954752?v=4?s=100" width="100px;" alt=""/><br /><sub><b>with-heart</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/pulls?q=is%3Apr+reviewed-by%3Awith-heart" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/Developer-DAO/web3-ui/commits?author=with-heart" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/christiananese"><img src="https://avatars.githubusercontent.com/u/6060101?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christian</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=christiananese" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AlexNi245"><img src="https://avatars.githubusercontent.com/u/26583503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=AlexNi245" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/swellander"><img src="https://avatars.githubusercontent.com/u/22231097?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam Wellander</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=swellander" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/txwkx"><img src="https://avatars.githubusercontent.com/u/19361575?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Todor Tsankov</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=txwkx" title="Code">💻</a></td>
    <td align="center"><a href="https://www.jovidecroock.com/"><img src="https://avatars.githubusercontent.com/u/17125876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jovi De Croock</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=JoviDeCroock" title="Code">💻</a></td>
    <td align="center"><a href="https://bonhomme.lol"><img src="https://avatars.githubusercontent.com/u/5518357?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bonhomme</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=maximebonhomme" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hone1er"><img src="https://avatars.githubusercontent.com/u/24376928?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hone1er</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=hone1er" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/emanueltimlopez"><img src="https://avatars.githubusercontent.com/u/25184000?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emanuel López</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=emanueltimlopez" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.dezinersoftware.com"><img src="https://avatars.githubusercontent.com/u/4706001?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Greg Syme</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=gjsyme" title="Code">💻</a></td>
    <td align="center"><a href="http://jay-software.com"><img src="https://avatars.githubusercontent.com/u/25109595?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Casuneanu Catalin</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=CatalinCsnMaster" title="Code">💻</a></td>
    <td align="center"><a href="http://jwar.xyz"><img src="https://avatars.githubusercontent.com/u/54959624?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jake Warren</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=jwarshack" title="Code">💻</a></td>
    <td align="center"><a href="https://linktr.ee/carlomigueldy"><img src="https://avatars.githubusercontent.com/u/45052332?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Carlo Miguel Dy</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=carlomigueldy" title="Code">💻</a> <a href="https://github.com/Developer-DAO/web3-ui/commits?author=carlomigueldy" title="Documentation">📖</a></td>
    <td align="center"><a href="https://iamaatoh.com"><img src="https://avatars.githubusercontent.com/u/6915805?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Akshata Mohanty</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=akshatamohanty" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.ibby.dev"><img src="https://avatars.githubusercontent.com/u/23090443?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ibby E</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=Ibby-devv" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/swetshaw"><img src="https://avatars.githubusercontent.com/u/26214362?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sweta Shaw</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=swetshaw" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Redarcher9"><img src="https://avatars.githubusercontent.com/u/19843336?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Snehit Paunikar</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=Redarcher9" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ngnathan"><img src="https://avatars.githubusercontent.com/u/1150025?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nathan Ng</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=ngnathan" title="Code">💻</a></td>
    <td align="center"><a href="https://medium.com/@codingwithmanny"><img src="https://avatars.githubusercontent.com/u/318082?v=4?s=100" width="100px;" alt=""/><br /><sub><b>manny</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=codingwithmanny" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/fjun99"><img src="https://avatars.githubusercontent.com/u/943418?v=4?s=100" width="100px;" alt=""/><br /><sub><b>fangjun</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=fjun99" title="Documentation">📖</a></td>
    <td align="center"><a href="http://jkrsp.com"><img src="https://avatars.githubusercontent.com/u/1188186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Julian Krispel-Samsel</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=juliankrispel" title="Documentation">📖</a></td>
    <td align="center"><a href="https://bandism.net/"><img src="https://avatars.githubusercontent.com/u/22633385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ikko Ashimine</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=eltociear" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/berteotti"><img src="https://avatars.githubusercontent.com/u/23079677?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leonardo Berteotti</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=berteotti" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://twitter.com/patcito"><img src="https://avatars.githubusercontent.com/u/26435?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Patrick Aljord</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=patcito" title="Code">💻</a></td>
    <td align="center"><a href="https://shamoilarsi.com"><img src="https://avatars.githubusercontent.com/u/16434451?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shamoil Arsiwala</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=shamoilarsi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ernestognw"><img src="https://avatars.githubusercontent.com/u/33379285?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ernesto García</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=ernestognw" title="Code">💻</a></td>
    <td align="center"><a href="https://dfimbres.github.io/"><img src="https://avatars.githubusercontent.com/u/10216994?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=dfimbres" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/e-roy"><img src="https://avatars.githubusercontent.com/u/70700747?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Roupe</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=e-roy" title="Code">💻</a></td>
    <td align="center"><a href="http://seromenho.com"><img src="https://avatars.githubusercontent.com/u/476673?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ricardo Seromenho</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=seromenho" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jamescharlesworth"><img src="https://avatars.githubusercontent.com/u/666455?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Charlesworth</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=jamescharlesworth" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/diegoalzate"><img src="https://avatars.githubusercontent.com/u/22416585?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Diego Alzate</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=diegoalzate" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/andriishupta"><img src="https://avatars.githubusercontent.com/u/10981565?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrii Shupta</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=andriishupta" title="Code">💻</a></td>
    <td align="center"><a href="https://meowy.arweave.dev/"><img src="https://avatars.githubusercontent.com/u/90390363?v=4?s=100" width="100px;" alt=""/><br /><sub><b>meowy</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=meowykun" title="Code">💻</a></td>
    <td align="center"><a href="http://hackandcraft.io"><img src="https://avatars.githubusercontent.com/u/11146088?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rémi Roycourt</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=remiroyc" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/shindeajinkya"><img src="https://avatars.githubusercontent.com/u/51527913?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ajinkya Shinde</b></sub></a><br /><a href="https://github.com/Developer-DAO/web3-ui/commits?author=shindeajinkya" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Special thanks

This project would not have been possible without these wonderful projects:

- [ethers](https://github.com/ethers-io/ethers.js/)
- [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth)
- [Chakra UI](https://github.com/chakra-ui/chakra-ui)
- [web3modal](https://github.com/web3modal/web3modal)
- [useDApp](https://github.com/EthWorks/useDapp)
- [wagmi](https://github.com/tmm/wagmi)
- [Storybook](https://github.com/storybookjs/storybook)
- [Preconstruct](https://github.com/preconstruct/preconstruct)
