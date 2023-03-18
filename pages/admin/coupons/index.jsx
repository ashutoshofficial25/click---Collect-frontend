import { Card } from "@mui/material";
import React from "react";

const offers = [
  {
    discount: "150",
    code: "B2GET50",
    minPurchaseValue: "0",
    expireDate: "JUNE 09 2023",
    expireTime: "11:50:00 P.M",
  },
  {
    discount: "300",
    code: "PE300",
    minPurchaseValue: "1,999",
    expireDate: "MAY 31 2023",
    expireTime: "11:50:00 P.M",
  },
  {
    discount: "2000",
    code: "PREMIUM2KOFF",
    minPurchaseValue: "6,999",
    expireDate: "JAN 16 2024",
    expireTime: "11:50:00 P.M",
  },
  {
    discount: "30%",
    code: "COLLECTIVE30",
    minPurchaseValue: "0",
    expireDate: "JAN 15 2013",
    expireTime: "11:50:00 P.M",
  },
];

const Coupons = () => {
  return (
    <div>
      {offers.map((offer) => (
        <Card elevation={2} className="border border-gray-300x mt-5">
          <div className="flex items-center">
            <div className="w-fit px-10 font-bold text-emerald-500 py-5  border-r-2">
              <div>{offer.discount}</div>
              <div>OFF</div>
            </div>
            <div className="text-sm text-gray-500 px-5">
              <p>On minimum purchase of Rs. {offer.minPurchaseValue}</p>
              <span>CODE: </span> <span>{offer.code}</span>
            </div>
          </div>

          <hr className="mx-5" />
          <div className="flex text-sm text-gray-500 justify-between px-5 py-4">
            <div>
              Expiry: {offer.expireDate} |{" "}
              <span className="font-bold"> {offer.expireTime}</span>{" "}
            </div>
            <div className="font-bold text-indigo-400 cursor-pointer">Edit</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Coupons;
