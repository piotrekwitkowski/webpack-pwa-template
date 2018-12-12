const copyPlugin = require('copy-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/app.js',

    devServer: { 
        open: true
    },

    plugins: [
        new copyPlugin([{ from: 'src/static' }]),

        new htmlPlugin({ template: 'src/index.html' })
    ]
}
