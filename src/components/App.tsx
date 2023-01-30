import { PropsWithChildren, ReactElement } from "react";
import "../styles/styles.scss";

interface Props extends PropsWithChildren<{}> {
    one: string,
    two: string
}

export default function App(props: Props): ReactElement {
    return (
        <>
            <h1>hello world</h1>
            <h1>{props.one}</h1>
            <h1>{props.two}</h1>
            {
                props.children ? props.children : undefined
            }
        </>
    );
}