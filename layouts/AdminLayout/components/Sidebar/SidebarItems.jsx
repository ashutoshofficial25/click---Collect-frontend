import PropTypes from "prop-types";
import { Button, ListItem } from "@mui/material";

const SidebarItems = ({ className, href, icon: Icon, title, ...rest }) => {
  return (
    <ListItem disableGutters {...rest}>
      <Button>
        {Icon && <Icon size="20" />}
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

SidebarItems.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default SidebarItems;
