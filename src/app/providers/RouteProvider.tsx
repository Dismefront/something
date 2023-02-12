import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/RouteConfig';

function RouteProvider() {
    return (
        <div className="content">
            <Suspense fallback={<h4>loading...</h4>}>
                <Routes>
                    {
                        routeConfig.map(({ path, element }) =>
                            <Route key={path} path={path} element={element} />)
                    }
                </Routes>
            </Suspense>
        </div>
    );
};

export default RouteProvider;