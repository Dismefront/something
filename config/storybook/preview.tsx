import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { RouterDecorator } from './decorators/routerDecorator';
import { ThemeDecorator } from './decorators/themeDecorator';

const preview: Preview = {
    decorators: [
        ThemeDecorator('light'),
        RouterDecorator,
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
