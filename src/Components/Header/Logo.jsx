import { Link } from "react-router-dom";
import logo from "../../assets/t.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {
  useGSAP(() => {
    gsap.from("#logo", {
      y: -100,
      scale: 0,
      duration: 0.6,
    });
  });
  return (
    <div className="" id="logo">
      <Link to="/">
        <img src={logo} alt="" className="w-10 h-10 dark:invert" />
      </Link>
    </div>
  );
};

export default Logo;
