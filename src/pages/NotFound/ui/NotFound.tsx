import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NotFound.module.scss';

export interface NotFoundProps {
    customClass?: string;
}

export const NotFound = ({ customClass }: NotFoundProps) => (
    <div className={classNames(classes.NotFound, {}, [customClass])}>
        Page not found
    </div>
);
