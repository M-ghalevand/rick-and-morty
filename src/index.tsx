import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { apolloClient } from "./graphql/apolloClient";
import ConfigureStore from "./store/ConfigureStore";
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={ConfigureStore}>
      <ApolloProvider client={apolloClient}>
    <App />
      </ApolloProvider>
      </Provider>
  </React.StrictMode>
);