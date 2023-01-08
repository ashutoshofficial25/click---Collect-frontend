import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import logo from "../../public/static/myntra-logo.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [searchItem, setSearchItem] = useState();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="border px-6 ">
        <div className="flex justify-between items-center h-18">
          {/* toggle button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          {/* items section */}
          <div
            className="flex items-center hidden w-full md:flex md:w-auto "
            id="navbar-default"
          >
            <Link href="/" className="transition duration-300 ease-in-out ">
              <Image
                height="15"
                width="50"
                className="mx-8  md:mx-4"
                src={logo}
                alt="logo"
              />
            </Link>

            <div className="flex gap-x-6 md:gap-x-3">
              <span className="cursor-pointer text-gray-800  py-7 px-1 text-sm border-b-4 border-white font-medium hover:border-b-4 hover:border-red-400">
                MEN
              </span>
              <span className="cursor-pointer text-gray-800 py-7 px-1 text-sm font-medium border-b-4 border-white hover:border-b-4 hover:border-rose-500">
                WOMEN
              </span>
              <span className="cursor-pointer text-gray-800 py-7 px-1 text-sm font-medium border-b-4 border-white hover:border-b-4 hover:border-orange-500">
                KIDS
              </span>
              <span className="cursor-pointer text-gray-800 py-7 px-1 text-sm font-medium border-b-4 border-white hover:border-b-4 hover:border-yellow-500">
                HOME & LIVING
              </span>
              <span className="cursor-pointer text-gray-800 py-7 px-1 text-sm font-medium border-b-4 border-white hover:border-b-4 hover:border-green-500">
                BEAUTY
              </span>
              <span className="cursor-pointer hidden w-full md:block md:w-auto text-gray-800 py-7 px-1 text-sm font-medium border-b-4 border-white hover:border-b-4 hover:border-pink-500">
                STUDIO
              </span>
            </div>
          </div>

          {/* search section */}
          <div className="ml-6  hidden md:block ">
            <input
              type="text"
              className="from-control  md:w-80 bg-gray-50  w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm outline-none focus:border-gray-600"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search for products, brands & more"
            />
          </div>

          {/* account section */}
          <div className="ml-2 flex ">
            <div className="group inline-block relative flex flex-col items-center cursor-pointer  px-2 py-6 border-b-4 border-white hover:border-b-4 hover:border-red-500">
              <img
                className="h3 w-4"
                src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
              />

              <span className="text-xs font-medium">Profile</span>

              <div className="absolute w-72 p-5 shadow-lg hidden text-gray-700 mt-16 z-10 bg-white group-hover:block">
                <div className="">
                  <div className="text-sm font-semibold">Welcome</div>
                  <div className="text-sm ">
                    To access account and manage orders
                  </div>

                  <Link
                    href="/login"
                    className="  transition duration-300 ease-in-out "
                  >
                    {" "}
                    <button className="bg-transparent hover:border-red-600 block text-black  py-1 px-2 border border-red-400  rounded">
                      LOGIN / SIGNUP
                    </button>
                  </Link>
                  <hr className="my-4" />

                  <div>
                    <div className="text-sm hover:font-semibold">Orders </div>
                    <div className="text-sm hover:font-semibold">Wishlist </div>
                    <div className="text-sm hover:font-semibold">
                      Gift Cards{" "}
                    </div>
                    <div className="text-sm hover:font-semibold">
                      Contact Us{" "}
                    </div>
                    <div className="">
                      <span className="text-sm hover:font-semibold">
                        Myntra Insider{" "}
                      </span>
                      <span className="items-center justify-center bg-red-400 px-2 text-xs text-white">
                        new
                      </span>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-sm hover:font-semibold">
                    Myntra Credit{" "}
                  </div>
                  <div className="text-sm hover:font-semibold">Coupons </div>
                  <div className="text-sm hover:font-semibold">
                    Saved Cards{" "}
                  </div>
                  <div className="text-sm hover:font-semibold">Saved VPA </div>
                  <div className="text-sm hover:font-semibold">
                    Saved Addresses
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center cursor-pointer   rounded-md py-6 px-2 ">
              <img
                className="h3 w-4"
                src="https://cdn-icons-png.flaticon.com/512/445/445140.png"
              />
              <span className="text-xs font-medium">Wishlist</span>
            </div>

            <Link
              href="/checkout/cart"
              className="flex flex-col items-center cursor-pointer   rounded-md py-6 px-2 "
            >
              <div className="relative">
                <img
                  className="h3 w-4"
                  src="https://img.icons8.com/fluency-systems-regular/48/null/shopping-bag--v1.png"
                />

                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  2
                </span>
              </div>
              <span className="text-xs font-medium">Bag</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* sign in btn-- <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
<span className="text-sm font-medium">Sign in</span>
</div> */
}

export default Navbar;
