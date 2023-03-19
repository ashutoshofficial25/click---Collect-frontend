import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { createUser, loginuser } from "../../actions/auth.action";
import loginOfferImg from "../../public/static/login-offer.png";
import { Formik } from "formik";

const Signup = () => {
  const router = useRouter();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    age: "",
    mobileNumber: "",
    password: "",
  };
  const handleSingup = async (formValues) => {
    try {
      const singup = await createUser(formValues);
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p={5} sx={{ backgroundColor: "#ffedf1" }}>
      <Head>
        <title>Myntra</title>
      </Head>

      <Card sx={{ maxWidth: 500, margin: "auto" }} elevation={0}>
        {/* <Image src={loginOfferImg} width="620px" height="auto" /> */}

        <CardContent>
          <Box px={4} pt={3}>
            <div className="mb-7">
              <span className="text-2xl font-semibold text-gray-700">
                Signup
              </span>
            </div>
            <Formik onSubmit={handleSingup} initialValues={initialState}>
              {({ handleChange, handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="First name"
                    id="firstName"
                    color="info"
                    sx={{
                      mb: "15px",
                    }}
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Last name"
                    sx={{
                      mb: "15px",
                    }}
                    id="lastName"
                    color="info"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  <Box
                    display="flex"
                    sx={{
                      mb: "15px",
                    }}
                    justifyContent="space-between"
                    gap={2}
                  >
                    <FormControl fullWidth className="mb-3">
                      <InputLabel id="gender">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        value={values.gender}
                        label="Gender"
                        size="small"
                        onChange={handleChange}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Age"
                      id="age"
                      type="number"
                      sx={{
                        mb: "15px",
                      }}
                      size="small"
                      fullWidth
                      required
                      value={values.age}
                      onChange={handleChange}
                      color="info"
                      variant="outlined"
                    />
                  </Box>
                  <TextField
                    label="Email"
                    id="email"
                    sx={{
                      mb: "15px",
                    }}
                    type="email"
                    size="small"
                    fullWidth
                    required
                    value={values.email}
                    onChange={handleChange}
                    color="info"
                    variant="outlined"
                  />
                  <TextField
                    label="Mobile Number"
                    type="number"
                    sx={{
                      mb: "15px",
                    }}
                    size="small"
                    fullWidth
                    required
                    value={values.mobileNumber}
                    onChange={handleChange}
                    id="mobileNumber"
                    color="info"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Password"
                    className="mb-3"
                    type="password"
                    size="small"
                    fullWidth
                    required
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    color="info"
                    variant="outlined"
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
              )}
            </Formik>

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

export default Signup;
