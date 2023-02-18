import React from 'react';

export const Main = React.lazy(() => new Promise(
    (res) => {
        /* @ts-ignore */
        setTimeout(() => res(import('./Main')), 500);
    },
));
