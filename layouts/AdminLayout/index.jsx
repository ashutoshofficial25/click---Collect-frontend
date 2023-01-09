import { Header, Sidebar } from "./components";

const AdminLayout = ({ children }) => {
   return (
      <div>
         <Header />
         <Sidebar />

         <div>{children}</div>
      </div>
   );
};

export default AdminLayout;
