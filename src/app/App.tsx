import { ReactElement, Suspense, useContext } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { useTheme } from 'shared/providers/ThemeProvider/index';
import RouteProvider from './providers/RouteProvider';
import { Navbar } from 'widgets/navbar';

const App = (): ReactElement => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <RouteProvider />
            <button onClick={toggleTheme}>Change Theme</button><br/>
        </div>
    );
};

export default App;