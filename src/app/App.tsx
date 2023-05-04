import { ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { useTheme } from 'shared/providers/ThemeProvider/index';
import { Navbar } from 'widgets/navbar';
import { SideBar } from 'widgets/SideBar';
import RouteProvider from './providers/RouteProvider';

const App = (): ReactElement => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="page">
                <SideBar />
                <RouteProvider />
            </div>
        </div>
    );
};

export default App;
