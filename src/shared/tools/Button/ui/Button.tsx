import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAN = 'clean',
    VISIBLE = 'debug',
    MINECRAFT = 'minecraft'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    customClass?: string;
    theme?: ButtonTheme;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    const {
        theme = ButtonTheme.CLEAN, customClass, children, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(classes.Button, {}, [customClass, classes[theme]])}
            {...otherProps}
        >
            <div className={classes.content}>
                {children}
            </div>
        </button>
    );
};
