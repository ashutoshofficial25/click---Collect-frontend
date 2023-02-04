import { useState } from "react";
import { Header, Sidebar } from "./components";

const AdminLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />

      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
