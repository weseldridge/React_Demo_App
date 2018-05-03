import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {ThemeProvider} from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import App from './App';
import theme from './theme';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache
});

const WithProviders = () => (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </ApolloProvider>
);


ReactDOM.render(<WithProviders />, document.getElementById('root'));

