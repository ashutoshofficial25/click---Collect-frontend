import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import CategoryIcon from "@mui/icons-material/Category";
import { Loyalty, ProductionQuantityLimits } from "@mui/icons-material";

export const vendorSidebar = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <DashboardRoundedIcon />,
  },
  { title: "Customers", url: "/admin/users", icon: <GroupRoundedIcon /> },
  {
    title: "Products",
    url: "/admin/products",
    icon: <ProductionQuantityLimitsRoundedIcon />,
  },
  {
    title: "Categories",
    url: "/admin/category",
    icon: <CategoryRoundedIcon />,
  },
  {
    title: "Payments",
    url: "/admin/payment",
    icon: <CurrencyRupeeRoundedIcon />,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: <InventoryRoundedIcon />,
  },
  {
    title: "Coupons",
    url: "/admin/coupons",
    icon: <DiscountRoundedIcon />,
  },
];

export const adminSidebar = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <DashboardRoundedIcon />,
  },
  { title: "Customers", url: "/admin/users", icon: <GroupRoundedIcon /> },
  { title: "Vendors", url: "/admin/vendors", icon: <GroupRoundedIcon /> },
  {
    title: "Categories",
    url: "/admin/category",
    icon: <CategoryIcon />,
  },

  {
    title: "Products",
    url: "/admin/products",
    icon: <ProductionQuantityLimits />,
  },
  {
    title: "Sales",
    url: "/admin/sales",
    icon: <Loyalty />,
  },
  {
    title: "Payments",
    url: "/admin/payment",
    icon: <CurrencyRupeeRoundedIcon />,
  },

  {
    title: "Coupons",
    url: "/admin/coupons",
    icon: <DiscountRoundedIcon />,
  },
];
