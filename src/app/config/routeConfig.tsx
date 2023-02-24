import { Home } from 'pages/Home';
import { Main } from 'pages/Main';
import { NotFound } from 'pages/NotFound';
import { Navigate, RouteProps } from 'react-router-dom';

import { AppRoutes, RoutePaths } from 'shared/routes/AppRoutes';

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths[AppRoutes.START],
        element: <Navigate to={RoutePaths[AppRoutes.HOME]} />,
    },
    {
        path: RoutePaths[AppRoutes.MAIN],
        element: <Main />,
    },
    {
        path: RoutePaths[AppRoutes.HOME],
        element: <Home />,
    },
    {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFound />,
    },
];
