import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <main
        className="min-h-screen w-full bg-gray-100 text-gray-700"
        x-data="layout"
      >
        <Header />

        <div className="flex">
          <Sidebar />
          <div>{children}</div>
        </div>
      </main>
      {/* <div>{children}</div> */}
    </div>
  );
};

export default AdminLayout;
