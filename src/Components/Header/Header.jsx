import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { TbCloudDownload } from "react-icons/tb";
import { gsap } from "gsap";
import Logo from "./Logo";

const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    gsap.from("#one, #two, #three, #four", {
      y: -80,
      duration: 2,
      stagger: 0.2,
    });
    gsap.to("#one, #two, #three, #four", {
      y: 0,
      duration: 2,
      stagger: 0.2,
    });
  });
  const nav = (
    <>
      <li className="relative mb-3" id="one">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="relative mb-3" id="two">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          About
        </NavLink>
      </li>
      <li className="relative mb-3" id="three">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="relative mb-3" id="four">
        <a
          className="rounded-full flex items-center gap-2 menu"
          download="Your_CV_File_Name.pdf"
          href="https://drive.google.com/uc?export=download&id=189V5j8VIENSkjP6RH3x1_WFojbwzjIRJ"
        >
          <span>Resume</span>
          <TbCloudDownload className="mt-1 text-[19px]" />
        </a>
      </li>
    </>
  );
  const mobileMenu = (
    <>
      <li className="relative mb-3" id="menuOne">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="relative mb-3" id="menuTwo">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          About
        </NavLink>
      </li>
      <li className="relative mb-3" id="menuThree">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="relative mb-3" id="menuFour">
        <a
          className="rounded-full flex items-center gap-2 menu"
          download="Your_CV_File_Name.pdf"
          href="https://drive.google.com/uc?export=download&id=189V5j8VIENSkjP6RH3x1_WFojbwzjIRJ"
        >
          <span>Resume</span>
          <TbCloudDownload className="mt-3 text-[22px] md:text-3xl" />
        </a>
      </li>
    </>
  );
  const showIcon = () => {
    setShow(true);
    gsap.to("#nav-side", {
      width: "55%",
      duration: 1.5,
      // ease: "bounce.out",
      ease: "elastic.out(1,0.7)",
      // ease: "slow(0.7,0.7,false)",
      // ease: "power4.out",
      stagger: 0.1,
    });
    gsap.from("#menuOne, #menuTwo, #menuThree, #menuFour", {
      x: 200,
      duration: 1,
      stagger: 0.1,
    });
    gsap.to("#menuOne, #menuTwo, #menuThree, #menuFour", {
      x: 0,
      duration: 1,
      stagger: 0.1,
    });
  };
  const hideIcon = () => {
    setShow(false);
    gsap.to("#nav-side", {
      width: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.1,
    });
    gsap.from("#menuOne, #menuTwo, #menuThree, #menuFour", {
      x: 0,
      duration: 1,
      stagger: 0.1,
    });
    gsap.to("#menuOne, #menuTwo, #menuThree, #menuFour", {
      x: 200,
      duration: 1,
      stagger: 0.1,
    });
  };

  return (
    <section className="w-10/12 py-6 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <Logo></Logo>
        </div>
        <div className="hidden lg:flex items-center justify-center text-2xl text-gray-700 dark:text-gray-200 dhurjati">
          <ul className="italic flex items-center justify-center gap-5">
            {nav}
          </ul>
        </div>
        <div className="block lg:hidden z-50">
          {show ? (
            <div
              onClick={hideIcon}
              className="bg-[#c9f31d] p-3 rounded-full cursor-pointer text-2xl"
            >
              <IoMdClose />
            </div>
          ) : (
            <div
              onClick={showIcon}
              className="bg-[#c9f31d] p-3 rounded-full cursor-pointer text-2xl"
            >
              <TbMenu />
            </div>
          )}
        </div>
        <div
          id="nav-side"
          className="fixed bg-[#5c5c5c52] dark:bg-[#ffffff20] h-screen overflow-hidden top-0 bottom-0 opacity-100 z-40 w-0 -right-1 clip"
        >
          <div className="h-5/6 flex items-center justify-center">
            <ul className="italic text-4xl sm:text-5xl text-gray-700 dark:text-gray-50 font-semibold tracking-wide dhurjati mt-10">
              {mobileMenu}
            </ul>
          </div>
          <div className="h-1/6 flex justify-center ">
            <div className="flex justify-center gap-5 text-xl text-[#c9f31d]">
              <a href="https://github.com/vivek9985">
                <FaGithub className="hover:scale-125 transition-all duration-300"></FaGithub>
              </a>
              <a href="https://dribbble.com/vivek9985">
                <FaDribbble className="hover:scale-125 transition-all duration-300"></FaDribbble>
              </a>
              <a href="https://www.linkedin.com/in/vivekanando/">
                <FaLinkedin className="hover:scale-125 transition-all duration-300"></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
