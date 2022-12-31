import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import logo from "../../public/static/Myntra_Logo.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
   const [searchItem, setSearchItem] = useState();

   return (
      <Box>
         <div className="bg-white ">
            <div className="border px-6 ">
               <div className="flex justify-between items-center h-20">
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
                     <Link
                        href="/"
                        className="transition duration-300 ease-in-out "
                     >
                        <img
                           className="h-6 w-10 mx-8 text-red-500"
                           src="https://www.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
                        />
                     </Link>

                     <div className="flex gap-x-8">
                        <span className="cursor-pointer rounded-sm py-3 px-1 text-md font-medium">
                           Men
                        </span>
                        <span className="cursor-pointer rounded-sm py-3 px-1 text-md font-medium hover:border-b-4 border-red-500">
                           Women
                        </span>
                        <span className="cursor-pointer rounded-sm py-3 px-1 text-md font-medium hover:border-b-4 border-red-500">
                           Kids
                        </span>
                        <span className="cursor-pointer rounded-sm py-3 px-1 text-md font-medium hover:border-b-4 border-red-500">
                           Home & Living
                        </span>
                        <span className="cursor-pointer rounded-sm py-3 px-1 text-md font-medium hover:border-b-4 border-red-500">
                           Beauty
                        </span>
                        <span className="cursor-pointer hidden w-full md:none md:w-auto rounded-sm py-3 px-1 text-md font-medium hover:border-b-4 border-red-500">
                           Studio
                        </span>
                     </div>
                  </div>

                  {/* search section */}
                  <div className="ml-6  hidden w-full md:flex md:w-auto">
                     <input
                        type="text"
                        className="from-control w-80  w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                        placeholder="Search for products, brands & more"
                     />
                  </div>

                  {/* account section */}
                  <div className="ml-2 flex ">
                     <div className="group inline-block relative flex flex-col items-center  cursor-pointer  rounded-md py-2 px-4 hover:bg-gray-100">
                        <img
                           className="h5 w-5"
                           src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
                        />

                        <span className="text-sm font-medium">Profile</span>

                        <div className="absolute w-72 p-5 shadow-lg hidden text-gray-700 mt-14 z-10 bg-white group-hover:block">
                           <div className="">
                              <div className="text-sm font-semibold">
                                 Welcome
                              </div>
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
                                 <div className="text-sm hover:font-semibold">
                                    Orders{" "}
                                 </div>
                                 <div className="text-sm hover:font-semibold">
                                    Wishlist{" "}
                                 </div>
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
                              <div className="text-sm hover:font-semibold">
                                 Coupons{" "}
                              </div>
                              <div className="text-sm hover:font-semibold">
                                 Saved Cards{" "}
                              </div>
                              <div className="text-sm hover:font-semibold">
                                 Saved VPA{" "}
                              </div>
                              <div className="text-sm hover:font-semibold">
                                 Saved Addresses
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col items-center cursor-pointer   rounded-md py-2 px-4 hover:bg-gray-100">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5 text-gray-500"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <span className="text-sm font-medium">Wishlist</span>
                     </div>

                     <div className="flex flex-col items-center cursor-pointer   rounded-md py-2 px-4 hover:bg-gray-100">
                        <div className="relative">
                           <img
                              className="h5 w-5"
                              src="https://img.icons8.com/fluency-systems-regular/48/null/shopping-bag--v1.png"
                           />

                           {/* <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span> */}
                        </div>
                        <span className="text-sm font-medium">Bag</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Box>
   );
};

{
   /* sign in btn-- <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
<span className="text-sm font-medium">Sign in</span>
</div> */
}

export default Navbar;
