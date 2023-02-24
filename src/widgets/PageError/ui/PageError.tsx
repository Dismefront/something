import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/tools/Button';
import { ButtonTheme } from 'shared/tools/Button/ui/Button';
import classes from './PageError.module.scss';

export interface PageErrorProps {
    customClass?: string;
    message?: string;
}

export const PageError = ({ customClass, message }: PageErrorProps) => (
    <div className={classNames(classes.PageError, {}, [customClass])}>
        <h1>Something went wrong</h1>
        <Button
            theme={ButtonTheme.MINECRAFT}
            onClick={() => {
            // eslint-disable-next-line no-restricted-globals
                location.reload();
            }}
        >
            Reload Page
        </Button>
        <p>
            {message}
        </p>
    </div>
);
