import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Minecraft: Story = {
    args: {
        theme: ButtonTheme.MINECRAFT,
        children: 'text',
    },
};

export const Clean: Story = {
    args: {
        theme: ButtonTheme.CLEAN,
        children: 'text',
    },
};

export const Visible: Story = {
    args: {
        theme: ButtonTheme.VISIBLE,
        children: 'text',
    },
};
