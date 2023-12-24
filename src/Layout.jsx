import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import ThemeChange from "../src/Components/ThemeChange/ThemeChange";

const Layout = () => {
  const socials = useRef();
  gsap.from(socials.current, {
    x: -150,
  });
  gsap.to(socials.current, {
    x: 0,
    duration: 1.5,
  });
  return (
    <main className="max-w-[1400px] mx-auto bg-[#fffaf1] dark:bg-[#161616] transition-all duration-300">
      <Header />
      <Outlet />
      <Footer />
      <div
        ref={socials}
        className="w-8 md:w-9 lg:w-11 h-36 md:h-40 lg:h-44 bg-[#c8f31d00] rounded-full fixed right-4 md:left-5 lg:left-8 top-0 bottom-0 my-auto z-10"
      >
        <div className="flex items-center justify-center mb-1.5 cursor-pointer">
          <ThemeChange></ThemeChange>
        </div>
        <ul className="w-full h-full rounded-full flex flex-col items-center justify-center gap-4 md:gap-5 bg-[#c9f31d]">
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
      </div>
    </main>
  );
};

export default Layout;
