import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const isDev: boolean = options.mode === 'development';

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./i,
                        localIdentName:
                            isDev
                                ? "[path][name]__[local]--[hash:base64:5]"
                                : "[hash:base64:5]"
                    }
                }
            },
            "sass-loader",
        ]
    }

    const fileLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/,
        loader: '@svgr/webpack'
    }

    return [
        svgLoader,
        typescriptLoader,
        styleLoader,
        fileLoader
    ];

}