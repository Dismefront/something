export enum AppRoutes {
    START='start',
    HOME='home',
    MAIN='main',
    NOT_FOUND='not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.START]: '/',
    [AppRoutes.HOME]: '/home',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.NOT_FOUND]: '*',
};
