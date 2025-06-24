import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Widget/Nav";
import { useEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from "@gsap/react";
// import CustomCursor from './Components/CustomCursor/CustomCursor';

const Layout = () => {
  useEffect(() => {
    new LocomotiveScroll();
  })
  useGSAP(() => {
    gsap.from("#socials", {
      y: 250,
      duration: 0.8,
      delay: 2.9,
      ease: "elastic.out(1,0.5)",
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
