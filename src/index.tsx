import { render } from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from 'pages/Error';
import App from './app/App';
import { ThemeProvider } from './shared/providers/ThemeProvider/ui/ThemeContextProvider';

render(
    <BrowserRouter>
        <ErrorBoundary
            FallbackComponent={Error}
        >
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
