import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Navbar from "../components/Navbar";
import { AdminLayout } from "../layouts";

import "../styles/globals.css";
import Routes from "./_routes";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Routes Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
