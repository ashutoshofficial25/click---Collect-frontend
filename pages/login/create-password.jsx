import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import verifyOtpImg from "../../public/static/verify-otp.png";
import Image from "next/image";
import { Box } from "@mui/system";

import Link from "next/link";
import Head from "next/head";

const CreatePassword = () => {
   return (
      <Box height="100vh" p={4} sx={{ backgroundColor: "#fcefe8" }}>
         <Head>
            <title>Register yourself</title>
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
               <div className="py-3">
                  <div className="font-semibold text-2xl py-1">
                     Enter your password
                  </div>
                  <div className="text-sm text-gray-500">
                     For your email ashutoshm9695@gmail.com
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
                     FORGOT PASSWORD
                  </div>
               </Link>

               <div className="px-1 py-3">
                  {" "}
                  <span className="text-sm text-gray-500">
                     Login using
                  </span>{" "}
                  <Link
                     href="#"
                     className="text-sm font-semibold text-rose-500"
                  >
                     OTP
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

export default CreatePassword;
