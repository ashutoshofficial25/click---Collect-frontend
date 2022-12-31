import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import verifyOtpImg from "../../public/static/verify-otp.png";
import Image from "next/image";
import { Box } from "@mui/system";

import Link from "next/link";

const VerifyOtp = () => {
  return (
    <Box height="90vh" p={5} sx={{ backgroundColor: "#fcefe8" }}>
      <Card sx={{ maxWidth: 500, margin: "auto", padding: "60px" }}>
        <CardContent>
          <Image src={verifyOtpImg} height={100} width={100} alt="vetify-otp" />
          <div className="py-3">
            <div className="font-semibold text-2xl py-1">Verify with OTP</div>
            <div className="text-sm text-gray-500">Sent to 9695734655</div>
          </div>

          <div id="otp" class="mt-5">
            <input
              class="m-2 border h-12 w-9 text-center form-control rounded"
              type="text"
              id="first"
              maxlength="1"
            />
            <input
              class="m-2 border h-12 w-9 text-center form-control rounded"
              type="text"
              id="second"
              maxlength="1"
            />
            <input
              class="m-2 border h-12 w-9 text-center form-control rounded"
              type="text"
              id="third"
              maxlength="1"
            />
            <input
              class="m-2 border h-12 w-9 text-center form-control rounded"
              type="text"
              id="fourth"
              maxlength="1"
            />
          </div>

          <Link href="#">
            <div className="font-semibold px-1 py-3 text-sm text-rose-500">
              RESEND OTP
            </div>
          </Link>

          <div className="px-1 py-3">
            {" "}
            <span className="text-sm text-gray-500">
              Login using password
            </span>{" "}
            <Link href="#" className="text-sm font-semibold text-rose-500">
              Password
            </Link>{" "}
          </div>

          <div className="px-1 py-3">
            {" "}
            <span className="text-sm text-gray-500">
              Having trouble in logging in?
            </span>{" "}
            <Link href="#" className="text-sm font-semibold text-rose-500">
              Get help
            </Link>{" "}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VerifyOtp;
