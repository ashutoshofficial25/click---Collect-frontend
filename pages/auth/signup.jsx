import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { loginuser } from "../../actions/auth.action";
import loginOfferImg from "../../public/static/login-offer.png";

const login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(auth);
    if (auth.fullname && auth.email && auth.password) {
      let user = loginuser({
        fullname: auth.fullname,
        email: auth.email,
        password: auth.password,
      });
      console.log(user);
    }
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
                Signup
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                value={auth.fullname}
                onChange={(e) => setAuth({ ...auth, fullname: e.target.value })}
                className="border mb-4 border-gray-300 text-gray-900 text-md block w-full pl-5 p-2.5 focus:border-gray-600 outline-none "
                placeholder="Your Fullname"
                required
              />
              <input
                type="email"
                id="email"
                value={auth.email}
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                className="border mb-4 border-gray-300 text-gray-900 text-md block w-full pl-5 p-2.5 focus:border-gray-600 outline-none "
                placeholder="Your Email"
                required
              />
              <input
                type="password"
                id="password"
                value={auth.password}
                onChange={(e) => setAuth({ ...auth, password: e.target.value })}
                className="border  border-gray-300 text-gray-900 text-md block w-full pl-5 p-2.5 focus:border-gray-600 outline-none "
                placeholder="Your Password"
                required
              />
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
                Singup
              </button>
            </form>
            <div className="mt-4">
              <span className="font-base text-gray-700">
                Already have an account?
              </span>{" "}
              <Link className="font-semibold text-rose-500" href="/auth/login">
                Login
              </Link>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default login;
