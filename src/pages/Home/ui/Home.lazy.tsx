import React from "react"

export const Home = React.lazy(() => {
    return new Promise(
        res => {
            /* @ts-ignore */
            setTimeout(() => res(import('./Home')), 500);
        }
    )
});