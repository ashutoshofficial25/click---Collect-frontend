import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import loginOfferImg from "../../public/static/login-offer.png";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";
import Head from "next/head";

const login = () => {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box height="90vh" p={5} sx={{ backgroundColor: "#ffedf1" }}>
      <Head>
        <title>Myntra</title>
      </Head>

      <Card sx={{ maxWidth: 500, margin: "auto" }} elevation={0}>
        <Image src={loginOfferImg} width="620px" height="auto" />
        <CardContent>
          <Box px={4} pt={3}>
            <div className="mb-7">
              <span className="text-2xl font-semibold text-gray-700">
                Login
              </span>
              <span className="text-base font-medium mx-1 text-gray-600">
                or
              </span>
              <span className="text-2xl font-semibold text-gray-600">
                Signup
              </span>
            </div>
            <form>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0  flex justify-center items-center pl-3 pointer-events-none">
                  +91&nbsp;| &nbsp;
                </div>

                <input
                  type="tel"
                  id="phone"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border border-gray-300 text-gray-900 text-md block w-full pl-14 p-2.5 focus:border-gray-600 outline-none "
                  placeholder="Mobile Number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>

              <div className="my-4 ">
                <span className="font-sm tracking-tight  text-gray-500">
                  By continuing, I agree to the
                </span>{" "}
                <Link
                  className="font-semibold font-sm  tracking-tight text-rose-500"
                  href="#"
                >
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link className="font-semibold text-rose-500" href="#">
                  Privacy & Policy
                </Link>
              </div>

              <Link href="/login/verify-otp">
                {" "}
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  class="bg-rose-500 w-full hover:bg-rose-600 text-white font-semibold my-2 py-2 px-4"
                >
                  CONTINUE
                </button>
              </Link>
            </form>
            <div className="mt-4">
              <span className="font-base text-gray-700" te>
                Having trouble logging in?
              </span>{" "}
              <Link className="font-semibold text-rose-500" href="#">
                Get help
              </Link>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default login;
