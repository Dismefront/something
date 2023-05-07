import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme_switch';
import { Button } from 'shared/tools/Button';
import { ButtonTheme } from 'shared/tools/Button/ui/Button';
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
        <div
            data-testid="sidebar"
            className={classNames(
                classes.SideBar,
                { [classes.toggled]: isCollapsed },
                [customClass],
            )}
        >
            <Button
                theme={ButtonTheme.VISIBLE}
                data-testid="toggle-btn"
                onClick={toggle}
            >
                toggle
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher customClass={classes.theme} />
            </div>
        </div>
    );
};
