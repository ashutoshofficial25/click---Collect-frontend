import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { adminSidebar, vendorSidebar } from "./sidebarData";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
const Sidebar = () => {
  const { user } = useSelector((state) => state.user);

  console.log("log: ", user);

  return (
    <aside
      className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
      style={{ height: "90.5vh" }}
      x-show="asideOpen"
    >
      <Box
        display="flex"
        className="bg-gray-200 py-3"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar alt="" src="" />
        <Typography>Ashutosh</Typography>
      </Box>
      <hr color="black" />
      {user && user.role == "admin"
        ? adminSidebar.map((item) => (
            <Link
              href={item.url}
              className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))
        : user.role == "vendor" &&
          vendorSidebar.map((item) => (
            <Link
              href={item.url}
              className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
    </aside>
  );
};

export default Sidebar;
