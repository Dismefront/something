import { WebpackPluginInstance } from "webpack";
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: options.paths.html
        }),
        options.loadingLogger ? new webpack.ProgressPlugin() : undefined
    ];
}