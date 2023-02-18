import { useContext } from 'react';
import {
    Theme, ThemeContext, ThemeContextProps, THEME_KEY,
} from './ThemeContext';

export interface UseThemeI {
    toggleTheme?: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeI {
    const { theme, setTheme } = useContext<ThemeContextProps>(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    };

    return {
        toggleTheme, theme,
    };
}
