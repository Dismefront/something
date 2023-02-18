import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme_switch';
import classes from './SideBar.module.scss';

export interface SideBarProps {
    customClass?: string;
}

export const SideBar = ({ customClass }: SideBarProps) => {
    const [isCollapsed, switchCollapse] = useState(false);

    const toggle = () => {
        switchCollapse((prev) => !prev);
    };

    return (
        <div className={classNames(
            classes.SideBar,
            { [classes.toggled]: isCollapsed },
            [customClass],
        )}
        >
            <button type="button" onClick={toggle}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher customClass={classes.theme} />
            </div>
        </div>
    );
};
