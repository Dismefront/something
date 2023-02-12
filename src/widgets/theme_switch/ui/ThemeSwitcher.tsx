import classes from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/providers/ThemeProvider';
import MoonIcon from 'shared/files/svg/sun.svg';
import SunIcon from 'shared/files/svg/moon.svg';
import { Theme } from 'shared/providers/ThemeProvider/lib/ThemeContext';
import { Button } from 'shared/tools/Button';
import { ButtonTheme } from 'shared/tools/Button/ui/Button';

export interface ThemeSwitcherProps {
    customClass?: string;
}

export const ThemeSwitcher = ({customClass}: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button 
            theme={ButtonTheme.CLEAN}
            customClass={classNames(classes.ThemeSwitcher, {}, [customClass])}
            onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? 
                <MoonIcon viewBox='0 0 256 256' className={classes.icon}/>
                :
                <SunIcon viewBox='0 0 125 125' className={classes.icon}/>
            }
        </Button>
    );
};