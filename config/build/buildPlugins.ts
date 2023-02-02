import { WebpackPluginInstance } from "webpack";
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: options.paths.html
        }),
        options.loadingLogger ? new webpack.ProgressPlugin() : undefined,
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "css/[name].[contenthash:5].css"
        })
    ];
}