import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Auth from "../components/Guard/Auth";
import Routes from "../layouts/Routes";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth>
        <Routes Component={Component} pageProps={pageProps} />
      </Auth>
    </Provider>
  );
}
