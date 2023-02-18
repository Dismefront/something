import React from 'react';

export const Home = React.lazy(() => new Promise(
    (res) => {
        /* @ts-ignore */
        setTimeout(() => res(import('./Home')), 500);
    },
));
