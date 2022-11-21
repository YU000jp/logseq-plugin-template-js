🚩plugin-template

# logseq-plugin-template-js
 - Logseq plugins are mostly written in Typescript. It's not easy for beginners to learn, so I think it's better to learn Javascript in the beginning.

## Enviroment
1. GitHub desktop client https://desktop.github.com/
1. Visual Studio Code https://azure.microsoft.com/ja-jp/products/visual-studio-code/
1. pnpm https://pnpm.io/ja/installation
1. node.js https://pnpm.io/ja/cli/env


## How to
 1. Clone this repository on GitHub desktop client
 1. Rewrite `LICENSE.md` and `package.json`
 1. Launch a terminal. Run `pnpm install` from the same folder as the repository.
 1. Modules is installed and the development environment is ready.
 1. Edit the main script `src/index.js`
 1. Build the plugin `pnpm build`
 1. Have Logseq load the plugin in developer mode.
 1. Once the plugin is complete, publish it to Logseq marketplace. 
    1. Release with a tag like v.1.0.0 on the Github repository.
    1. Fork logseq/marketplace repository on Github. https://github.com/logseq/marketplace
    1. In your forked repository, upload the required folders to `package` directory. 
    1. Make a pull request. After posting, wait a few days for a response.

## Imported SDK
 - @logseq/libs https://logseq.github.io/plugins/
 - logseq-dateutils https://github.com/hkgnp/logseq-dateutils

## Credit
 - https://github.com/hkgnp/logseqplugin-basic-template
 - https://github.com/YU000jp/logseq-plugin-templete-js
