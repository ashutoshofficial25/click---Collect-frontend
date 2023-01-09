import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import verifyOtpImg from "../../public/static/verify-otp.png";
import Image from "next/image";
import { Box } from "@mui/system";

import Link from "next/link";
import Head from "next/head";

const OTPLogin = () => {
   return (
      <Box height="100vh" p={4} sx={{ backgroundColor: "#fcefe8" }}>
         <Head>
            <title>Login with OTP</title>
         </Head>

         <Card
            sx={{
               maxWidth: 400,
               margin: "auto",
               padding: { lg: "40px", sm: "36px", xs: "28px" },
            }}
         >
            <CardContent>
               <Image
                  src={verifyOtpImg}
                  height={100}
                  width={100}
                  alt="vetify-otp"
               />
               <Link
                  href="/login/otp-login"
                  className="text-sm font-semibold text-rose-500"
               >
                  We are sorry! this service is unavailable!
               </Link>{" "}
               <div className="py-3">
                  <div className="font-semibold text-2xl py-1">
                     Enter OTP
                  </div>
                  <div className="text-sm text-gray-500">
                     Sent to your email ashutoshm9695@gmail.com
                  </div>
               </div>

               <div id="otp" class="mt-5">
                  <input
                     type="password"
                     id="password"
                     className="border border-gray-300 text-gray-900 text-md block w-full pl-5 p-2.5 focus:border-gray-600 outline-none "
                     required
                     placeholder="Enter password"
                  />
               </div>

               <Link href="#">
                  <div className="font-semibold px-1 py-3 text-sm text-rose-500">
                     Resend
                  </div>
               </Link>

               <div className="px-1 py-3">
                  {" "}
                  <span className="text-sm text-gray-500">
                     Login using
                  </span>{" "}
                  <Link
                     href="/login/verify-otp"
                     className="text-sm font-semibold text-rose-500"
                  >
                     Password
                  </Link>{" "}
               </div>

               <div className="px-1 py-3">
                  {" "}
                  <span className="text-sm text-gray-500">
                     Having trouble in logging in?
                  </span>{" "}
                  <Link
                     href="#"
                     className="text-sm font-semibold text-rose-500"
                  >
                     Get help
                  </Link>{" "}
               </div>
            </CardContent>
         </Card>
      </Box>
   );
};

export default OTPLogin;
