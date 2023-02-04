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
        <Avatar
          style={{ cursor: "pointer", width: 64, height: 64 }}
          src={user.avatar}
          to="/app/account"
        />
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
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          style={{ width: 256 }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          style={{ width: 256, top: 64, height: "calc(100% - 64px)" }}
          open
          variant="persistent"
        >
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
