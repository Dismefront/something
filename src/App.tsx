import { ReactElement, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home.lazy';
import Main from './pages/Main/Main';

const App = (): ReactElement => {
    return (
        <>
            <Link to={'/main'}>Hello</Link>
            <Link to={'/home'}>World</Link>
            <Suspense fallback={<h4>loading...</h4>}>
                <Routes>
                    <Route path={'main'} element={<Main />} />
                    <Route path={'home'} element={<Home />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;