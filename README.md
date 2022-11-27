# logseq-plugin-template-js

- Logseq plugins are mostly written in Typescript. It's not easy for beginners to learn, so I think it's better to learn **Javascript** in the beginning. Customize Logseq using `@logseq/libs`.

## Required environment

1. GitHub desktop client <https://desktop.github.com/>
1. Visual Studio Code <https://azure.microsoft.com/ja-jp/products/visual-studio-code/>
1. pnpm <https://pnpm.io/ja/installation>
1. node.js <https://pnpm.io/ja/cli/env>

## How to use

1. Select [Use this template] → [Create a new repository]
1. Clone the repository on GitHub desktop client

## Step

1. Edit few items `LICENSE.md` and `package.json` on Visual Studio Code
1. Launch a terminal by contextmenu from the same folder as the repository. Run `pnpm install`
1. Modules is installed and the development environment is ready.
1. Edit the main script `src/index.js`
1. Build the plugin. Run `pnpm build`
1. switch to Electron Developer Tools on Logseq (⌨️: Windows`Ctrl+Shift+I` or Mac`Cmd+Alt+I`)
1. Have Logseq load the plugin in developer mode.

![Animation6w12](https://user-images.githubusercontent.com/111847207/204119897-c237eabf-c538-4d24-ac72-c6735364119a.gif)

## How to publish

- Once the plugin is complete, publish it to Logseq marketplace.

1. Commit to the Github repo on GitHub desktop client.
1. Release with a tag like v.1.0.0 on your repository on Github. It takes about a minute for Github CI to finish working. Then two are added to the asset.
1. Fork logseq/marketplace repository. <https://github.com/logseq/marketplace>
1. In your forked repository, upload the required folders to `package` directory.
   - `manifest.json` <https://github.com/logseq/marketplace/blob/master/packages/logseq-dev-theme/manifest.json>
   - `icon.png` or other `icon.svg`
1. Make a pull request. After posting, wait a few days for a response. They are checked, merged and published.

## Link

- [Logseq Plugin Setup Guide](https://gist.github.com/xyhp915/bb9f67f5b430ac0da2629d586a3e4d69)
- [Logseq Plugin API docs](https://plugins-doc.logseq.com/)
- [Discord Logseq #plugin-developers](https://discord.gg/rak7X2dXx9)
- [An Intro to Making Logseq Plugins ft. Sawhney(YouTube)](https://www.youtube.com/watch?v=57h7te3NvJg)
- [logseq-plugins-in-action(Chinese document)](https://correctroad.gitbook.io/logseq-plugins-in-action/)

## Imported SDK

- [@logseq/libs](https://logseq.github.io/plugins/)
- [logseq-dateutils](https://github.com/hkgnp/logseq-dateutils)

## Credit

- <https://github.com/hkgnp/logseqplugin-basic-template>
- <https://github.com/YU000jp/logseq-plugin-templete-js>
