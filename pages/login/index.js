import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import loginOfferImg from "../../public/static/login-offer.png";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const login = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // function to check user already registered or new.
      //if new router.push('/login/create-password)
      //if old router.push("/login/verify-password)
      if (typeof window !== "undefined") {
        localStorage.setItem("email", email);
      }

      router.push("/login/verify-password");
    }
  };

  return (
    <Box height="100vh" p={4} sx={{ backgroundColor: "#ffedf1" }}>
      <Head>
        <title>Myntra</title>
      </Head>

      <Card sx={{ maxWidth: 400, margin: "auto" }} elevation={0}>
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
            <form onSubmit={handleSubmit}>
              <div className=" mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 text-gray-900 text-md block w-full pl-5 p-2.5 focus:border-gray-600 outline-none "
                  placeholder="Your Email"
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
              </div>{" "}
              <button
                type="submit"
                class="bg-rose-500 w-full hover:bg-rose-600 text-white font-semibold my-2 py-2 px-4"
              >
                CONTINUE
              </button>
            </form>
            <div className="mt-4">
              <span className="font-sm text-gray-700" te>
                Having trouble logging in?
              </span>{" "}
              <Link className=" text-rose-500" href="#">
                <span className="font-semibold font-sm"> Get help</span>
              </Link>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default login;
