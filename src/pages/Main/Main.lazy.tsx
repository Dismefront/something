import React from "react"

export const Main = React.lazy(() => {
    return new Promise(
        res => {
            /* @ts-ignore */
            setTimeout(() => res(import('./Main')), 500);
        }
    )
});