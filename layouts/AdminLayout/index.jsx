import { useState } from "react";
import { Header, Sidebar } from "./components";

const AdminLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
      <Header />

      <div class="flex">
        <Sidebar />

        <div class="w-full p-4">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
