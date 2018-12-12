const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: './src/app.sw.js',

    output: { path: path.resolve(__dirname, 'docs') },

    plugins: [
        new cleanPlugin('docs'),

        new copyPlugin([{ from: 'src/static' }]),

        new htmlPlugin({ template: 'src/index.html' }),

        new workboxPlugin.GenerateSW(),

        // new bundleAnalyzerPlugin()
    ]
}
