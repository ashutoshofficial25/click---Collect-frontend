import { useState } from "react";
import { Header, Sidebar } from "./components";

const AdminLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
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
