import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from 'widgets/Spinner';
import { routeConfig } from '../config/RouteConfig';

function RouteProvider() {
    return (
        <div className="content">
            <Suspense fallback={<Spinner />}>
                <Routes>
                    {
                        routeConfig.map(({ path, element }) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
}

export default RouteProvider;
