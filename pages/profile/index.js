import { Container } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Container>
      <div className="mt-16 pb-4">
        <div className="text-xl font-semibold text-gray-800">Account</div>
        <div className="text-sm text-gray-600">Ashutosh Maurya</div>
      </div>
      <hr className=" mx-auto h-px bg-gray-400 dark:bg-gray-700" />
      <div className="flex">
        <div className="right-section w-52 border-r border-gray-400 py-3 px-6 min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28">
          <div>Overview</div>

          <hr className="my-5" />

          <ul>
            <span className="text-gray-500">ORDERS</span>
            <li>Orders & Returns</li>
          </ul>

          <hr className="my-5" />

          <ul>
            <span className="text-gray-500">CREDITS</span>
            <li>Coupons</li>
            <li>Myntra Credit</li>
            <li>MynCash</li>
          </ul>

          <hr className="my-5" />

          <ul>
            <span className="text-gray-500">Account</span>
            <li className="text-green-700">Profile</li>
            <li>Saved Cards</li>
            <li>Saved VPA</li>
            <li>Addresses</li>
            <li>Myntra Insider</li>
          </ul>

          <hr className="my-5" />

          <ul>
            <span className="text-gray-500">LEGAL</span>

            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="left-section w-full border border-gray-400 p-4 m-4 max-[920px]:p-1 max-[920px]:m-2">
          <div className="text-center py-5 "> Profile Details</div>

          <hr className="mb-5" />

          <div className="w-96 text-center max-[920px]:w-60  m-auto">
            <div className="flex justify-between py-2 text-gray-700">
              <span>Full Name</span>
              <span>Ashutosh Maurya</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Mobile Number</span>
              <span>9695734655</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Email ID</span>
              <span>ashutoshm9695@gmail.com</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Gender</span>
              <span>Male</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Date of Birth</span>
              <span>-not added-</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Location</span>
              <span>-not added-</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Alternate Mobile</span>
              <span>-not added</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Hint Name</span>
              <span>-not added</span>
            </div>
            <button className="px-1 text-gray-700 py-2 my-5  bg-rose-500 w-full">
              EDIT
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
