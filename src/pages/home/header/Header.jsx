import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/vivek.png";
import { useRef, useState } from "react";
import gsap from "gsap";
import { IoMdClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const Header = () => {
  const itemOne = useRef();
  const itemTwo = useRef();
  const itemThree = useRef();
  const itemFour = useRef();
  const faceBookIcon = useRef();
  const instagramIcon = useRef();
  const linkedInIcon = useRef();

  const nav = (
    <>
      <li className="relative mb-3" ref={itemOne}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="relative mb-3" ref={itemTwo}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          About
        </NavLink>
      </li>
      <li className="relative mb-3" ref={itemThree}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#c9f31d] menu" : "menu"
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="relative mb-3" ref={itemFour}>
        <a
          className="rounded-full menu"
          download="Your_CV_File_Name.pdf"
          href="https://drive.google.com/uc?export=download&id=189V5j8VIENSkjP6RH3x1_WFojbwzjIRJ"
        >
          Download CV
        </a>
      </li>
    </>
  );
  const showIcon = () => {
    setShow(!show);
    gsap.from(itemOne.current, {
      x: 250,
    });
    gsap.to(itemOne.current, {
      x: 0,
      duration: 1.1,
    });
    gsap.from(itemTwo.current, {
      x: 300,
    });
    gsap.to(itemTwo.current, {
      x: 0,
      duration: 1.2,
    });
    gsap.from(itemThree.current, {
      x: 350,
    });
    gsap.to(itemThree.current, {
      x: 0,
      duration: 1.3,
    });
    gsap.from(itemFour.current, {
      x: 400,
    });
    gsap.to(itemFour.current, {
      x: 0,
      duration: 1.4,
    });
    gsap.from(faceBookIcon.current, {
      y: 200,
    });
    gsap.to(faceBookIcon.current, {
      y: 0,
      duration: 1.1,
    });
    gsap.from(instagramIcon.current, {
      y: 250,
    });
    gsap.to(instagramIcon.current, {
      y: 0,
      duration: 1.2,
    });
    gsap.from(linkedInIcon.current, {
      y: 300,
    });
    gsap.to(linkedInIcon.current, {
      y: 0,
      duration: 1.3,
    });
  };
  const [show, setShow] = useState(false);
  return (
    <section className="w-10/12 py-6 mx-auto overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="w-[80px] h-10 invert dark:invert-0"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center text-2xl text-gray-700 dark:text-gray-200 dhurjati">
          <ul className="flex items-center justify-center gap-5">{nav}</ul>
        </div>

        <div className="block lg:hidden z-50">
          <div
            onClick={showIcon}
            className="bg-[#c9f31d] p-3 rounded-full cursor-pointer text-2xl"
          >
            {show ? <IoMdClose /> : <TbMenu />}
          </div>
        </div>

        <div
          className={`fixed bg-[#969696] dark:bg-[#000000] h-screen overflow-hidden top-0 bottom-0 transition-all rounded-tl-[100px] rounded-bl-[100px] duration-700 ease-in-out ${
            show
              ? "opacity-100 z-40 w-7/12 sm:w-5/12 md:w-5/12 -right-1"
              : "opacity-0 w-4/12 -right-[700px] -z-10"
          }`}
        >
          <div className="h-5/6 flex items-center justify-center">
            <ul className="text-4xl sm:text-5xl text-gray-700 dark:text-gray-50 font-semibold tracking-wide dhurjati mt-10">
              {nav}
            </ul>
          </div>
          <div className="h-1/6 flex justify-center ">
            <div className="flex justify-center gap-5 text-xl text-[#c9f31d]">
              <a
                href="https://github.com/vivek9985"
                ref={instagramIcon}
              >
                <FaGithub className="hover:scale-125 transition-all duration-300"></FaGithub>
              </a>
              <a href="https://dribbble.com/vivek9985" ref={faceBookIcon}>
                <FaDribbble className="hover:scale-125 transition-all duration-300"></FaDribbble>
              </a>
              <a
                href="https://www.linkedin.com/in/vivekanando/"
                ref={linkedInIcon}
              >
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
