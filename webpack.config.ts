import webpack from 'webpack';
import path from 'path';
import { buildConfig } from './config/build/buildConfig';
import { BuildEnvironment, BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnvironment) => {
    const config: webpack.Configuration = buildConfig({
        mode: env.mode || 'development',
        paths,
        loadingLogger: true,
        port: env.port || 3030,
    });

    return config;
};
