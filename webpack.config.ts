import webpack from 'webpack';
import { buildConfig } from './config/build/buildConfig';
import { BuildPaths } from './config/build/types/config';
import path from 'path';

const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, "src", "index.ts")
}

const config: webpack.Configuration = buildConfig({
    mode: 'production',
    paths: paths,
    debugger: true
});

export default config;