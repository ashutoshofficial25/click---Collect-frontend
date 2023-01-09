import React from "react";

const OrderReturn = () => {
  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-5 py-2">
        <div>
          <div className="text-sm">Myntra Insider</div>
          <div className="text-sm">
            Earn 10 insider points for every ₹ 100 purchase
          </div>
        </div>
        <button className="button text-xs rounded bg-pink-600 px-4">
          Enroll <br /> Now
        </button>
      </div>

      <div className="flex justify-between my-5 px-2 items-center ">
        <div>
          <p className="text-lg font-bold">All Orders</p>
          <p className="text-sm">from anytime</p>
        </div>
        <div>
          <input
            className="border border-gray-400 outline-none py-1 px-5"
            type="search"
          />
          <button className="ml-5"> FILTER</button>
        </div>
      </div>

      <div className="h-80 bg-gray-200"></div>
    </>
  );
};

export default OrderReturn;
