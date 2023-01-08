import Image from "next/image";
import React from "react";

const cartItems = [
  {
    id: 1,
    brand: "NOISE",
    product: "X-Fit 2 Smartwatch - Gray",
    img: "https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/products%2Fcart-items%2Fcart-item-1.webp?alt=media&token=31a8ff5f-4495-4cf7-bbad-4dd626c5a1da",
    seller: "Flashtech Retail",
    price: "1,999",
    return: "Not returnable",
    dehlivery: "3 days",
  },
  {
    id: 2,
    brand: "Liberty",
    product: "Men Black Textured Formal Derby",
    img: "https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/products%2Fcart-items%2Fcart-item-2.webp?alt=media&token=02274b28-975b-41a3-8412-560a17368770",
    seller: "Liberty Shoes Limted",
    price: "1,039",
    return: "30 days Return available",
    dehlivery: "3 days",
  },
];

const Cart = () => {
  return (
    <div>
      <div className="flex justify-center w-full ">
        {/* left section */}
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

          <div className="cart-items ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="card mt-6 border border-gray-300 flex items-center gap-5 px-5 hover:bg-gray-50 cursor-pointer"
              >
                <Image
                  height={150}
                  width={150}
                  src={item.img}
                  alt="cart-item-img"
                />

                <div>
                  <p className="text-sm font-bold">{item.brand}</p>
                  <p className="text-sm text-gray-500">{item.product}</p>
                  <p className="text-sm text-gray-300">
                    {" "}
                    Sold by: {item.seller}
                  </p>
                  <p className=" text-sm font-semibold">
                    size <span>quantity</span>
                  </p>
                  <p className="text-sm font-semibold">₹ {item.price}</p>
                  <p className="text-xs font-semibold">{item.return}</p>
                  <p className="text-xs">
                    Delivery in{" "}
                    <span className=" font-semibold">{item.dehlivery}</span>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right section */}
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
