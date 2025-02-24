### This is a fork of the following extension which I reduced down to the simplest form that I need to help me complete my vim vscode setup.
<https://marketplace.visualstudio.com/items?itemName=sirmspencer.vscode-autohide>

## Developing
1) Clone repo
2) Make code changes in "src" folder.
3) Run "npm run compile". (this will start compiler in watch mode) [if editing in vscode, Ctrl+Shift+B also works]
4) In vscode, open the Debug panel and launch the extension from there.

##Build and Installation
```
vsce package
code --install-extension vscode-vim-autohide-<version>.vsix
```

## Credit to 'VTools for Visual Studio Code'

The extension of sirmspencer is a heavily modified version of:
<https://marketplace.visualstudio.com/items?itemName=venryx.vscode-vtools>
