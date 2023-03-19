import React from "react";
import { useSelector } from "react-redux";

const ProfileDetail = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="text-center py-5 "> Profile Details</div>

      <hr className="mb-5" />

      <div className="w-96 text-center max-[920px]:w-60 max-[500px]:w-60  m-auto">
        <div className="flex justify-between py-2 text-gray-700">
          <span>Full Name</span>
          <span>
            {user.firstName} {user.lastName}
          </span>
        </div>
        <div className="flex justify-between py-2 text-gray-700">
          <span>Mobile Number</span>
          <span>9695734655</span>
        </div>
        <div className="flex justify-between py-2 text-gray-700">
          <span>Email ID</span>
          <span>{user.username}</span>
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
    </>
  );
};

export default ProfileDetail;
