import { Outlet } from "react-router-dom";
import Nav from "./Components/Widget/Nav";
import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
// import CustomCursor from './Components/CustomCursor/CustomCursor';
import Header from './Components/Section/Shared/Header';
import Footer from './Components/Section/Shared/Footer';
import Message from "./Components/Widget/Message";

const Layout = () => {
  useEffect(() => {
    new LocomotiveScroll();
  })

  return (
    <main className="relative">
      {/* <CustomCursor /> */}
      <div className="bg-light dark:bg-secondary transition-all duration-300 pt-20">
        <Header />
        <Outlet />
        <Footer />
        <Nav />
        <Message />
      </div>
    </main>
  );
};

export default Layout;
