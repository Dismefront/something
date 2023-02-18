import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/tools/AppLink';
import { ThemeSwitcher } from 'widgets/theme_switch';
import classes from './Navbar.module.scss';

export interface NavbarProps {
    customClass?: string;
}

export const Navbar = ({ customClass }: NavbarProps) => (
    <div className={classNames(classes.Navbar, {}, [customClass])}>
        <div className={classes.links}>
            <AppLink theme={AppLinkTheme.PURPLE} to="/home">Home</AppLink>
            <AppLink theme={AppLinkTheme.PURPLE} to="/main">Main</AppLink>
        </div>
    </div>
);
