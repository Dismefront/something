import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/tools/AppLink';
import { ErrorThrower } from 'widgets/ErrorThrower';
import classes from './Navbar.module.scss';

export interface NavbarProps {
    customClass?: string;
}

export const Navbar = ({ customClass }: NavbarProps) => (
    <div className={classNames(classes.Navbar, {}, [customClass])}>
        <div className={classes.links}>
            <AppLink
                customClass={classes.indent}
                theme={AppLinkTheme.PURPLE}
                to="/home"
            >
                Home
            </AppLink>
            <AppLink
                customClass={classes.indent}
                theme={AppLinkTheme.PURPLE}
                to="/main"
            >
                Main
            </AppLink>
            <ErrorThrower customClass={classes.indent} />
        </div>
    </div>
);
