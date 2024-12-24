import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import ThemeChange from "../src/Components/ThemeChange/ThemeChange";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Layout = () => {
  useGSAP(() => {
    gsap.from("#socials", {
      y: 150,
      duration: 1.2,
      delay: 4.4,
    });
  }, []);
  return (
    <main className="bg-[#fffaf1] dark:bg-[#161616] transition-all duration-300">
      <div className="max-w-[1600px] mx-auto">
        <Header />
      </div>
      <Outlet />
      <div className="max-w-[1600px] mx-auto">
        <Footer />
      </div>
      <div
        id="socials"
        className="w-[190px] md:w-[220px] h-9 md:h-11 rounded-full flex items-center justify-center gap-3 fixed left-0 right-0 bottom-4 mx-auto z-10"
      >
        <ul className="w-full h-full rounded-full flex items-center justify-center gap-4 md:gap-5 bg-[#c9f31d]">
          <a href="https://dribbble.com/vivek9985" target="_blank">
            <FaDribbble className="hover:scale-150 transition-all duration-300"></FaDribbble>
          </a>
          <a href="https://www.instagram.com/anando_vivek/" target="_blank">
            <FaInstagram className="hover:scale-150 transition-all duration-300"></FaInstagram>
          </a>
          <a href="https://www.linkedin.com/in/vivekanando/" target="_blank">
            <FaLinkedin className="hover:scale-150 transition-all duration-300"></FaLinkedin>
          </a>
          <a href="https://github.com/vivek9985" target="_blank">
            <FaGithub className="hover:scale-150 transition-all duration-300"></FaGithub>
          </a>
        </ul>
        <div className="flex items-center justify-center cursor-pointer">
          <ThemeChange></ThemeChange>
        </div>
      </div>
    </main>
  );
};

export default Layout;
