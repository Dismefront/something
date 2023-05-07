import { StoryFn } from '@storybook/react';
import React from 'react';

export const ThemeDecorator = (theme: string) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
