import { Link } from "react-router-dom";
import logo from "../../assets/vivek.png";
import { useEffect } from "react";
import { gsap } from "gsap";

const Logo = () => {
  useEffect(() => {
    gsap.to("#logo", {
      translateY: 2,
      duration: 2,
    });
  });
  return (
    <div className="-translate-y-20" id="logo">
      <Link to="/">
        <img src={logo} alt="" className="w-[80px] h-10 invert dark:invert-0" />
      </Link>
    </div>
  );
};

export default Logo;
