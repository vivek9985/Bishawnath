import { Link } from "react-router-dom";
import logo from "../../assets/t.webp";
import { useEffect } from "react";
import { gsap } from "gsap";

const Logo = () => {
  useEffect(() => {
    gsap.from("#logo", {
      x: -200,
      duration: 1.5,
    });
    gsap.to("#logo", {
      x: 0,
      duration: 1.5,
      // ease: "elastic.out(1,0.3)",
      ease: "bounce.out",
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
