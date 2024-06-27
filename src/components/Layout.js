import { Outlet } from "react-router-dom";
import Nav from "./nav-component";

const Layout = ({ currentUser, setCurrentUser }) => {
  return (
    <>
      {/* 讓nav bar去知道現在使用者是否有登入， */}
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Outlet />
    </>
  );
};

export default Layout;
