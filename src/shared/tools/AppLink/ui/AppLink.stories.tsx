import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../../../../config/storybook/decorators/themeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        to: '#',
        theme: AppLinkTheme.PRIMARY,
        children: 'text',
    },
};

export const PrimaryDark: Story = {
    args: {
        to: '#',
        theme: AppLinkTheme.PRIMARY,
        children: 'text',
    },
    decorators: [ThemeDecorator('dark')],
};

export const Red: Story = {
    args: {
        to: '#',
        theme: AppLinkTheme.RED,
        children: 'text',
    },
};

export const Purple: Story = {
    args: {
        to: '#',
        theme: AppLinkTheme.PURPLE,
        children: 'text',
    },
};
