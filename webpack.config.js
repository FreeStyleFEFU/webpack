const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PostCssPresetEnv = require('postcss-preset-env')

const mode = process.env.NODE_ENV || 'development';

const isDevMode = mode === 'development';

const target = isDevMode ? 'web' : 'browserslist'; // для каких браузеров сборка, использование автопрефиксов и т.д.
const devtool = isDevMode ? 'source-map' : undefined;

console.log(process.env.NODE_ENV, mode, isDevMode);

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,ph
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        // для префиксов user-select: none; => -webkit-user-select: none; -moz-user-select: none; и т.д.
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [PostCssPresetEnv],
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
        ]
    }
}