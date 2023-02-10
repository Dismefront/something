import classes from './Navbar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

export interface NavbarProps {
    customClass?: string;
}

export const Navbar = ({ customClass }: NavbarProps) => {
    return (
        <div className={classNames(classes.Navbar, {}, [customClass])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.PURPLE} to='/home'>Home</AppLink>
                <AppLink theme={AppLinkTheme.PURPLE} to='/main'>Main</AppLink>
            </div>
        </div>
    );
};

