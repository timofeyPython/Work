const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: {
        main:['core-js/stable',
              'regenerator-runtime/runtime',
              './index.js']
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@':path.resolve(__dirname,'src'),
            '@core':path.resolve(__dirname,'src','core'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src','favicon.ico'),
                    to: path.resolve(__dirname,'dist')
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename:'[name].bundle.css'
        })

    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },

}