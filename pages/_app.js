import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>
          Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra
        </title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}
