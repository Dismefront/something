import { Home } from 'pages/Home';
import { Main } from 'pages/Main';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'shared/routes/AppRoutes';

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths[AppRoutes.MAIN],
        element: <Main />,
    },
    {
        path: RoutePaths[AppRoutes.HOME],
        element: <Home />,
    },
];
