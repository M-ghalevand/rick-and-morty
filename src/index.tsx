import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import ConfigureStore from "./store/ConfigureStore";
import { apolloClient } from "./graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "./styles/global.scss";
import MUIProvider from "./components/layouts/theme/MUIProvider";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ConfigureStore}>
      <ApolloProvider client={apolloClient}>
        <MUIProvider>
          <App />
        </MUIProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
