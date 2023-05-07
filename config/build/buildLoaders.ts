import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { cssLoader } from './loaders/cssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const isDev: boolean = options.mode === 'development';

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styleLoader = cssLoader(isDev);

    const fileLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/,
        loader: '@svgr/webpack',
    };

    return [
        svgLoader,
        typescriptLoader,
        styleLoader,
        fileLoader,
    ];
}
