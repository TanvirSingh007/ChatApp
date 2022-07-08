import { Outlet, Link } from "react-router-dom";
import './../assets/css/mycssfile.css';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
};

export default Layout;