import classes from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

export enum ButtonTheme {
    CLEAN = 'clean',
    VISIBLE = 'debug'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    customClass?: string;
    theme?: ButtonTheme;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    const { theme=ButtonTheme.CLEAN, customClass, children, ...otherProps } = props;
    return (
        <button className={classNames(classes.Button, {}, [customClass, classes[theme]])}
            {...otherProps}>
            {children}
        </button>
    );
};