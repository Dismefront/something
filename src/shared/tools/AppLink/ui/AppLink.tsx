import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { FunctionComponent, PropsWithChildren } from 'react';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY='primary',
    RED='red',
    PURPLE='purple'
}

export interface AppLinkProps {
    customClass?: string;
    theme?: AppLinkTheme;
    to: string;
}

export const AppLink: FunctionComponent<PropsWithChildren<AppLinkProps>> = (props) => {
    const {
        children, theme = AppLinkTheme.PRIMARY, customClass, to,
    } = props;
    return (
        <Link to={to} className={classNames(classes.AppLink, {}, [customClass, classes[theme]])}>
            {children}
        </Link>
    );
};
