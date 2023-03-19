import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { adminSidebar, vendorSidebar } from "./sidebarData";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { blue } from "@mui/material/colors";
const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

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
        gap={1}
      >
        <Avatar alt="" src="" />
        <Typography>{user.firstName}</Typography>
      </Box>
      <hr color="black" />
      <List></List>
      {user && user.roles[0] == "ADMIN"
        ? adminSidebar.map((item) => (
            <Link href={item.url}>
              <ListItemButton
                key={item.title}
                sx={{
                  cursor: "pointer",
                  backgroundColor: router.pathname.includes(item.url)
                    ? "#999fff"
                    : "",
                  "&:hover": {
                    backgroundColor: "#c0c2e3",
                  },
                  marginBottom: "5px",
                }}
                size="small"
              >
                {item.icon}
                <Box ml={2}> {item.title}</Box>
              </ListItemButton>
            </Link>
          ))
        : user.roles[0] == "VENDOR" &&
          vendorSidebar.map((item) => (
            <Link
              href={item.url}
              className={`${
                router.pathname.includes(item.url)
                  ? "bg-gray-200"
                  : "hover:bg-gray-200"
              } flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-200`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
    </aside>
  );
};

export default Sidebar;
