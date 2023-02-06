import { useState } from "react";
import { Header, Sidebar } from "./components";

const AdminLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div style={{position:"fixed", top:84, paddingTop:50}}>
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      </div>

      
<div style={{marginLeft: 256}}>{children}</div>
      
    </div>
  );
};

export default AdminLayout;
