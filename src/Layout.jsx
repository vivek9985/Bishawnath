import { Outlet } from "react-router-dom";
import Nav from "./Components/Widget/Nav";
import { useEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from "@gsap/react";
// import CustomCursor from './Components/CustomCursor/CustomCursor';
import Header from './Components/Section/Shared/Header';
import Footer from './Components/Section/Shared/Footer';

const Layout = () => {
  useEffect(() => {
    new LocomotiveScroll();
  })
  useGSAP(() => {
    gsap.from("#socials", {
      y: 250,
      duration: 1,
      delay: 3,
      ease: "elastic.out(1,0.7)",
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
