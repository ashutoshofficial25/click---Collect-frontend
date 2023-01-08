import Image from "next/image";
import React from "react";
import OverviewCards from "./OverviewCards";

const Overview = () => {
  return (
    <>
      <div className="w-full flex justify-between bg-gray-200 py-5 px-7">
        <div className="flex gap-5 items-center">
          <Image
            height={100}
            width={100}
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-logo.png?alt=media&token=3b85a370-b7a0-4c59-932d-6d51e2fd54b0x"
            alt="profile"
            className="bg-gray-400 p-2"
          />
          <span>ashutoshm9695@gmail.com</span>
        </div>

        <span>
          {" "}
          <button className="button border px-1 py-1 text-xs border-black">
            EDIT PROFILE
          </button>{" "}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 justify-center py-5">
        <OverviewCards
          title="Orders"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-orders.png?alt=media&token=bec08166-e433-435b-8571-71a6e08f6360"
          subtitle="Check your order status"
        />
        <OverviewCards
          title="Collection & wishlist"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-collections.png?alt=media&token=89438711-b81d-41da-9280-39afe589a650"
          subtitle="All your curated product collections"
        />
        <OverviewCards
          title="Myntra Credit"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-myntra-credit.png?alt=media&token=e5f74033-4981-49c9-85ee-13a8de0529a9"
          subtitle="Manage all your refunds & gift cards"
        />
        {/* 2nd */}
        <OverviewCards
          title="MynCash"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-myntrapoints.png?alt=media&token=75818fca-ee50-4b37-aa14-72b70d39b5cb"
          subtitle="Earn MynCash as you shop use them in checkout"
        />
        <OverviewCards
          title="Saved Card"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-cards.png?alt=media&token=b1a2c44e-e98c-4df6-80a6-84df43f022be"
          subtitle="Save your card for your faster checkout"
        />
        <OverviewCards
          title="Save yout VPA"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-myntra-credit.png?alt=media&token=e5f74033-4981-49c9-85ee-13a8de0529a9"
          subtitle="View your saved VPA"
        />
        {/* 3rd */}
        <OverviewCards
          title="Addresses"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-address.png?alt=media&token=ff89b688-350b-4b18-8cd4-3e5bc6c0d825"
          subtitle="Save your address for hassle free checkout"
        />
        <OverviewCards
          title="Coupons"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-coupons.png?alt=media&token=6201ff3e-7c77-4c6b-80ba-521bcf34d494"
          subtitle="Manage coupons for additional discounts"
        />
        <OverviewCards
          title="Profile Details"
          src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/logos%2Fprofile-edit.png?alt=media&token=ffb183a8-47a9-449d-aaed-1cc93e41651b"
          subtitle="Change your profile details & password"
        />
      </div>
    </>
  );
};

export default Overview;
