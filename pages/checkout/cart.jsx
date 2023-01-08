import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="flex justify-center w-full ">
        <div className="left-section mt-6">
          <div className="flex justify-between items-center border border-gray-300 py-1 px-3    text-sm">
            <div className="order-address  p-5 ">
              <p>
                Deliver to: <span>Ashutosh Maurya, 226011 </span>
              </p>
              <p>C-1385/2 C-Block Indira Nagar (Lucknow), Lucknow</p>
            </div>

            <button className="button border px-1 py-1 text-rose-500 border-rose-500">
              CHANGE ADDRESS
            </button>
          </div>
          <div className="border border-gray-300 p-5  mt-3">
            <p className="text-sm">Available Offers</p>
            <p className="text-xs">
              15% Instant Discount on OneCard Credit Cards on a min spend of Rs.
              2000. TCA
            </p>
          </div>

          <div className="border border-gray-300 px-5 py-2 mt-3">
            <p className="text-xs">Yay! No convenience fee on this order</p>
          </div>
        </div>
        <div className="right-section p-5 w-80 pt-10 border-l ml-3">
          <div className="text-sm mb-3"> COUPONS</div>
          <div className="flex justify-between">
            <p className="text-sm">Apply Coupons</p>
            <button className="text-xs border text-rose-500 border-rose-500 px-1">
              {" "}
              Apply
            </button>
          </div>
          <hr className="m-5" />

          <p className="text-xs">GIFTING & PERSONALISATION</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
