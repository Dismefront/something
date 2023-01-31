import { PropsWithChildren, ReactElement } from "react";
import bitches from '../styles/styles.module.scss';
import '../index.scss';

interface Props extends PropsWithChildren<{}> {
    one: string,
    two: string
}

export default function App(props: Props): ReactElement {
    return (
        <>
            <h1>hello world</h1>
            <h1 className={bitches.nigger}>{props.one}</h1>
            <h1>{props.two}</h1>
            {
                props.children ? props.children : undefined
            }
        </>
    );
}