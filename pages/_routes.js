import Head from "next/head";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { AdminLayout } from "../layouts";

export default function Routes({ Component, pageProps }) {
  const { user } = useSelector((state) => state.user);

  console.log("user:", user);

  return (
    <>
      {user.role === "vendor" || user.role === "admin" ? (
        <AdminLayout>
          <Component {...pageProps} />{" "}
        </AdminLayout>
      ) : (
        <Fragment>
          <Head>
            <title>
              Online Shopping for Women, Men, Kids Fashion & Lifestyle - Click &
              Collect
            </title>
          </Head>
          <Navbar />
          <Component {...pageProps} />
        </Fragment>
      )}
    </>
  );
}
