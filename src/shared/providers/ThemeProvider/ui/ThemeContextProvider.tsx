import { ThemeContext } from "../lib/ThemeContext";
import { THEME_KEY, Theme } from "../lib/ThemeContext";
import { useState, FunctionComponent, useMemo } from "react";

const userTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FunctionComponent = ({children}) => {
    const [theme, setTheme] = useState<Theme>(userTheme);

    const defaultProps = useMemo(() => ({
        theme, setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}