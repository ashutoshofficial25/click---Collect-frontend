import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { logoutUser } from "../../../../actions/auth.action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../../../../feature/userSlice";
import { Typography } from "@mui/material";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const singout = async () => {
    await logoutUser();
    dispatch(logout);
    router.push("/");
  };
  return (
    <div className="fixed">
      <header
        style={{ backgroundColor: "#3f51b5", color: "#fff" }}
        className="flex w-full items-center justify-between border-b-2 border-gray-200 p-2 px-5 shadow-xl"
      >
        <div className=" w-48 divide-y  ">
          <div className="flex items-center space-x-2 p-2">
            <AdminPanelSettingsIcon fontSize="large" />
            <Typography
              ml={2}
              variant="h6"
              color="#fff"
              className="font-medium"
            >
              Click & Collect Admin
            </Typography>
          </div>
        </div>
        <button type="button" className="h-9 w-9 " onClick={singout}>
          <LogoutIcon /> Logout
        </button>
      </header>
    </div>
  );
};

export default Header;
