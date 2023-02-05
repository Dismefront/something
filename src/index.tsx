import { render } from "react-dom";
import './index.scss';
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './shared/providers/ThemeProvider/ui/ThemeContextProvider';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
