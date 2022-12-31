import { Container } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Container>
      <div className="mt-16 pb-4">
        <div className="text-xl font-semibold text-gray-800">Account</div>
        <div className="text-sm text-gray-600">Ashutosh Maurya</div>
      </div>
      <hr className=" mx-auto h-px bg-gray-200 dark:bg-gray-700" />
      <div className="">
        <div className="right-section"></div>
        <div className="left-section"></div>
      </div>
    </Container>
  );
};

export default Profile;
