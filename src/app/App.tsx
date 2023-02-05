import { ReactElement, Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Home } from 'pages/Home/index';
import { Main } from 'pages/Main/index';
import './styles/index.scss';
import { useTheme } from 'shared/providers/ThemeProvider/index';


const App = (): ReactElement => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button><br/>
            <Link to={'/main'}>Hello</Link><br/>
            <Link to={'/home'}>World</Link>
            <Suspense fallback={<h4>loading...</h4>}>
                <Routes>
                    <Route path={'main'} element={<Main />} />
                    <Route path={'home'} element={<Home />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;