import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Navbar from "../components/Navbar";
import { AdminLayout } from "../layouts";
import Routes from "../layouts/Routes";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Routes Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
