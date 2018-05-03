import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import theme from './theme';

const WithProviders = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);


ReactDOM.render(<WithProviders />, document.getElementById('root'));

