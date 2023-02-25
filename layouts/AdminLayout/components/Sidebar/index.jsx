import React from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import Link from "next/link";
const Sidebar = () => {
  return (
    <aside
      className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
      style={{ height: "90.5vh" }}
      x-show="asideOpen"
    >
      <Link
        href="/dashboard"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <DashboardRoundedIcon />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/admin/users"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <GroupRoundedIcon />
        <span>Users</span>
      </Link>

      <Link
        href="/admin/products"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <ProductionQuantityLimitsRoundedIcon />
        <span>Products</span>
      </Link>
      <Link
        href="/admin/category"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <CategoryRoundedIcon />
        <span>Category</span>
      </Link>
      <Link
        href="/admin/payment"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <CurrencyRupeeRoundedIcon />
        <span>Payment</span>
      </Link>
      <Link
        href="/admin/order"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <InventoryRoundedIcon />
        <span>Orders</span>
      </Link>

      <Link
        href="/admin/coupons"
        className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-gray-100 "
      >
        <DiscountRoundedIcon />
        <span>Coupons</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
