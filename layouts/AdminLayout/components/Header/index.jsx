import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-rose-500 p-2 px-5 shadow-xl">
      <div className=" w-48 divide-y  ">
        <div className="flex items-center space-x-2 p-2">
          <AdminPanelSettingsIcon />
          <span className="font-medium">Click & Collect Admin</span>
        </div>
      </div>
      <button type="button" className="h-9 w-9 ">
        <LogoutIcon /> Logout
      </button>
    </header>
  );
};

export default Header;
