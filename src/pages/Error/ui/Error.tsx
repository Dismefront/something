import { classNames } from 'shared/lib/classNames/classNames';
import { PageError } from 'widgets/PageError/ui/PageError';
import classes from './Error.module.scss';

export interface ErrorProps {
    customClass?: string;
    error: Error;
}

export const Error = ({ customClass, error }: ErrorProps) => (
    <div className={classNames(classes.Error, {}, [customClass])}>
        <PageError message={error.message} />
    </div>
);
