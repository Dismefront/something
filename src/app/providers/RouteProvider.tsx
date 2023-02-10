import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/RouteConfig';

function RouteProvider() {
    return (
        <Suspense fallback={<h4>loading...</h4>}>
            <Routes>
                {
                    routeConfig.map(({ path, element }) =>
                        <Route path={path} element={element} />)
                }
            </Routes>
        </Suspense>
    );
};

export default RouteProvider;