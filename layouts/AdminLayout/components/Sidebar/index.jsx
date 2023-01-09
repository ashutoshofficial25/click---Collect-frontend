import { useEffect } from "react";
import PropTypes from "prop-types";

import {
  FiBarChart as BarChartIcon,
  FiSettings as SettingsIcon,
  FiShoppingBag as ShoppingBagIcon,
  FiUser as UserIcon,
  FiUsers as UsersIcon,
  FiLogOut as LogoutIcon,
  FiInfo as FeedbackIcon,
} from "react-icons/fi";
import { FaRoute as RouteIcon } from "react-icons/fa";
import { MdOutlineRequestQuote as MdOutlineRequestQuoteIcon } from "react-icons/md";
import { BiRupee as BiRupeeIcon } from "react-icons/bi";
import { AiFillCar as AiFillCarIcon } from "react-icons/ai";

import { MdDirectionsBike as MdDirectionsBikeIcon } from "react-icons/md";
import Link from "next/link";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@mui/material";
import SidebarItems from "./SidebarItems";
import { useRouter } from "next/router";

const user = {
  avatar: "",
  jobTitle: "Founder & CEO",
  name: "Anurag Srivastava",
};

const items = [
  {
    href: "/admin/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/admin/owners",
    icon: ShoppingBagIcon,
    title: "Owners",
  },
  {
    href: "/admin/drivers",
    icon: UserIcon,
    title: "Drivers",
  },
  {
    href: "/admin/riders",
    icon: UsersIcon,
    title: "Riders",
  },
  {
    href: "/admin/rides",
    icon: MdDirectionsBikeIcon,
    title: "Rides",
  },
  {
    href: "/admin/ride-feedback",
    icon: FeedbackIcon,
    title: "Ride Feedback",
  },
  {
    href: "/admin/vehicles",
    icon: AiFillCarIcon,
    title: "Vehicles",
  },
  {
    href: "/admin/fairAmount",
    icon: BiRupeeIcon,
    title: "Fair Amount",
  },
  {
    href: "/admin/route",
    icon: RouteIcon,
    title: "Routes",
  },
  {
    href: "/admin/onwer-withdrawal-requests",
    icon: MdOutlineRequestQuoteIcon,
    title: "Owner Withdrawal Requests",
  },

  {
    href: "/logout",
    icon: LogoutIcon,
    title: "Logout",
  },
];

const Sidebar = ({ onMobileClose, openMobile }) => {
  const location = useRouter();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar src={user.avatar} to="/app/account" />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <SidebarItems
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      {/*
         <Box p={2} m={2} bgcolor="background.dark">
            <Typography align="center" gutterBottom variant="h4">
               Need more?
            </Typography>
            <Typography align="center" variant="body2">
               Upgrade to PRO version and access 20 more screens
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
               <Button
                  color="primary"
                  component="a"
                  href="https://react-material-kit.devias.io"
                  variant="contained"
               >
                  See PRO version
               </Button>
            </Box>
         </Box>
         */}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" open variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default Sidebar;
