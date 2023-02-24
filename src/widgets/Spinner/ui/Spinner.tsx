import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss';

export interface SpinnerProps {
    customClass?: string;
}

export const Spinner = ({ customClass }: SpinnerProps) => (
    <div className={classNames('Spinner', {}, [customClass])}>
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    </div>
);
