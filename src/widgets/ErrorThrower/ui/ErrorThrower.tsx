import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/tools/Button';
import { ButtonTheme } from 'shared/tools/Button/ui/Button';
import { useEffect, useState } from 'react';
import classes from './ErrorThrower.module.scss';

export interface ErrorThrowerProps {
    customClass?: string;
}

export const ErrorThrower = ({ customClass }: ErrorThrowerProps) => {
    const [err, setErr] = useState<Boolean>();
    useEffect(() => {
        if (err) { throw new Error('Purposeful error initialized'); }
    }, [err]);
    return (
        <Button
            customClass={classNames(classes.ErrorThrower, {}, [customClass])}
            theme={ButtonTheme.MINECRAFT}
            onClick={() => setErr(!err)}
        >
            Throw Error
        </Button>
    );
};
