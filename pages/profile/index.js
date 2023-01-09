import { Container } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import {
   Addresses,
   SavedCard,
   MynCash,
   MyntraCredit,
   OrderReturn,
   ProfileDetail,
   Coupons,
   Overview,
} from "../../components/ProfileComponents";

const Profile = () => {
   const [content, setContent] = useState("Profile");

   return (
      <Container>
         <div className="mt-16 pb-4">
            <div className="text-xl font-semibold text-gray-800">Account</div>
            <div className="text-sm text-gray-600">Ashutosh Maurya</div>
         </div>
         <hr className=" mx-auto h-px bg-gray-400 dark:bg-gray-700" />
         <div className="flex">
            <div className="right-section w-52 max-sm:hidden border-r border-gray-400 py-3 px-6 min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28">
               <span
                  className="hover:text-green-700 hover:font-bold font-medium text-sm cursor-pointer"
                  onClick={() => setContent("Overview")}
               >
                  Overview
               </span>

               <hr className="my-5" />

               <ul>
                  <span className="text-gray-500 text-sm">ORDERS</span>
                  <li
                     className="hover:text-green-700 hover:font-bold font-medium text-sm cursor-pointer"
                     onClick={() => setContent("OrderReturn")}
                  >
                     Orders & Returns
                  </li>
               </ul>

               <hr className="my-5" />

               <ul>
                  <span className="text-gray-500">CREDITS</span>
                  <li
                     className="hover:text-green-700 hover:font-bold font-medium text-sm cursor-pointer"
                     onClick={() => setContent("Coupons")}
                  >
                     Coupons
                  </li>
                  <li
                     className="hover:text-green-700 hover:font-bold font-medium text-sm cursor-pointer"
                     onClick={() => setContent("MyntraCredit")}
                  >
                     Myntra Credit
                  </li>
                  <li
                     className="hover:text-green-700 hover:font-bold font-medium text-sm cursor-pointer"
                     onClick={() => setContent("MynCash")}
                  >
                     MynCash
                  </li>
               </ul>

               <hr className="my-5" />

               <ul>
                  <span className="text-gray-500">Account</span>
                  <li
                     className="hover:text-green-700 hover:font-bold font-medium text-sm cursor-pointer"
                     onClick={() => setContent("Profile")}
                  >
                     Profile
                  </li>
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
               {content === "Profile" && <ProfileDetail />}
               {content === "Overview" && <Overview setContent={setContent} />}
               {content === "OrderReturn" && <OrderReturn />}
               {content === "Coupons" && <Coupons />}
               {content === "MyntraCredit" && <MyntraCredit />}
               {content === "MynCash" && <MynCash />}
               {content === "SavedCard" && <SavedCard />}
               {content == "Addresses" && <Addresses />}
            </div>
         </div>
      </Container>
   );
};

export default Profile;
