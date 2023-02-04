import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";
import { FiLogOut as LogOutIcon } from "react-icons/fi";
import Link from "next/link";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../../../../public/static/myntra-logo.png";
import Image from "next/image";

const Header = ({ onMobileNavOpen, ...rest }) => {
  return (
    <AppBar className="bg-rose-500 z-10" elevation={0} {...rest}>
      <Toolbar>
        <Link href="/admin" className="flex">
          <Image
            height="15"
            width="50"
            className="mx-8  md:mx-4"
            src={logo}
            alt="logo"
          />
          <Box ml={2}>
            <Typography variant="h4" noWrap>
              Click & Collect Admin
            </Typography>
          </Box>
        </Link>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit" aria-label="logout">
            <Link href="/logout">
              <LogOutIcon size={20} />
              <Typography varient="h6">Logout</Typography>
            </Link>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <FiMenu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default Header;
