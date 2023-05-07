import path from 'path';
import { cssLoader } from '../build/loaders/cssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(cssLoader(true));

    return config;
};
