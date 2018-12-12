# webpack-pwa-template

## Demo (installable PWA)
https://piotrekwitkowski.github.io/webpack-pwa-template

## Installation
Clone the repo and run
```bash
npm install
```
to download all node dependencies.

## Development
```bash
npm run wds
```
runs [webpack-web-server](https://webpack.js.org/configuration/dev-server/) without [workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) goodness.

## Build
```bash
npm run build
```
builds the minified bundle and enables serviceworker stuff. It is now saved in ```docs``` folder to speedup [github.io](https://piotrekwitkowski.github.io/webpack-pwa-template/) upload.