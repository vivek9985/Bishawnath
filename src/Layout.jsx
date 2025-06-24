import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";
// import CustomCursor from './Components/CustomCursor/CustomCursor';
import Nav from "./Components/Widget/Nav";

const Layout = () => {
  useEffect(() => {
    new LocomotiveScroll();
  })
  useGSAP(() => {
    gsap.from("#socials", {
      y: 250,
      duration: 1,
      delay: 2,
      ease: "elastic.out(1,0.6)",
    });
  }, []);

  return (
    <main className="relative">
      {/* <CustomCursor /> */}
      <div className="bg-[#fffaf1] dark:bg-[#161616] transition-all duration-300">
        <Header />
        <Outlet />
        <Footer />
        <Nav />
      </div>
    </main>
  );
};

export default Layout;
