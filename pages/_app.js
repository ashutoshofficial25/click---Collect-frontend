import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import { AdminLayout } from "../layouts";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
   const isAdmin = true;
   return (
      <Fragment>
         {isAdmin ? (
            <AdminLayout>
               <Component {...pageProps} />{" "}
            </AdminLayout>
         ) : (
            <Fragment>
               <Head>
                  <title>
                     Online Shopping for Women, Men, Kids Fashion & Lifestyle -
                     Myntra
                  </title>
               </Head>
               <Navbar />
               <Component {...pageProps} />
            </Fragment>
         )}
      </Fragment>
   );
}
