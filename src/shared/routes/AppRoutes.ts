export enum AppRoutes {
    HOME='home',
    MAIN='main'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/home',
    [AppRoutes.MAIN]: '/main',
}