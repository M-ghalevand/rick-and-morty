import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import ConfigureStore from "./store/ConfigureStore";
import { apolloClient } from "./graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "./styles/global.scss";

const MUIProvider = lazy(
  () => import("./components/layouts/theme/MUIProvider")
);
const App = lazy(() => import("./App"));

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
