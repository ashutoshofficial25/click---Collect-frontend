import Head from "next/head";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { RoleConstant } from "../constants";
import AdminLayout from "./AdminLayout";

export default function Routes({ Component, pageProps }) {
   const { user } = useSelector((state) => state.user);

   console.log("user:", user);

   const isAdmin = (roles) => {
      const findIndex = roles.findIndex(
         (role) =>
            role === RoleConstant.ADMIN ||
            role === RoleConstant.ROOT ||
            role === RoleConstant.VENDOR
      );

      return findIndex === -1 ? false : true;
   };

   return (
      <>
         {user && isAdmin(user.roles) ? (
            <AdminLayout>
               <Component {...pageProps} />{" "}
            </AdminLayout>
         ) : (
            <Fragment>
               <Head>
                  <title>
                     Online Shopping for Women, Men, Kids Fashion & Lifestyle -
                     Click & Collect
                  </title>
               </Head>
               <Navbar />
               <Component {...pageProps} />
            </Fragment>
         )}
      </>
   );
}
