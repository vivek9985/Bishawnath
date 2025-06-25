import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import gsap from "gsap";
import ThemeChange from "../../Widget/ThemeChange/ThemeChange";
import Logo from "../../ui/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  {
    name: "Resume",
    path: "https://drive.google.com/file/d/1DvKN0c0faQX36lL73X8ZLNlx94fpiNkS/view?usp=sharing",
    external: true,
  },
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/vivek9985" },
  { icon: <FaDribbble />, url: "https://dribbble.com/bishawnath-bormon" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bishawnath/" },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const toggleNav = (state) => {
    setShow(state);
    gsap.to(navRef.current, {
      width: state ? "45%" : "0%",
      borderRadius: state ? "0%" : "100% 0% 0% 100%",
      duration: 1.2,
      ease: state ? "elastic.out(1,0.8)" : "power4.inOut",
    });
  };

  return (
    <header className="max-w-[1600px] mx-auto">
      <div className="w-10/12 mx-auto py-6 md:py-8 flex items-center justify-between">
        <Logo />
        {/* Desktop Theme Toggle */}
        <div className="hidden lg:block cursor-pointer">
          <ThemeChange />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden z-50">
          <ThemeChange />
          <div
            onClick={() => toggleNav(!show)}
            className="bg-accent dark:bg-primary text-white dark:text-black w-11 h-11 flex items-center justify-center rounded-full cursor-pointer text-2xl"
          >
            {show ? <IoMdClose /> : <TbMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={navRef}
          id="nav-side"
          className="w-0 fixed bg-[#1c1b1b] dark:bg-white h-screen overflow-hidden rounded-tl-[100%] rounded-bl-[100%] top-0 bottom-0 z-40 -right-1"
        >
          {/* Nav Links */}
          <div className="h-5/6 flex items-center justify-center">
            <ul className="text-4xl sm:text-5xl dark:text-gray-900 text-stone-50 font-semibold tracking-wide dhurjati mt-10">
              {navLinks.map((link, index) => (
                <li key={index} className="relative mb-3">
                  {link.external ? (
                    <a href={link.path} target="_blank" rel="noreferrer" className="menu">
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "text-[#c9f31d] menu" : "menu"
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Icons */}
          <div className="h-1/6 flex justify-center">
            <div className="flex justify-center gap-5 text-xl text-[#c9f31d]">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
