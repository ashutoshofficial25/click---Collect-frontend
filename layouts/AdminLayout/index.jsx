import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Header, Sidebar } from "./components";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <main
      className="min-h-screen w-full bg-gray-100 text-gray-700"
      x-data="layout"
    >
      <Header />

      <div className="flex">
        <Sidebar />
        <div className="w-full p-4">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
