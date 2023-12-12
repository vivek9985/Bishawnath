import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";

const ThemeChange = () => {
  const [mode, setMode] = useState("light");
  const changeTheme = () => {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
    }
  };
  return (
    <div
      onClick={changeTheme}
      className="w-8 md:w-9 lg:w-11 h-8 md:h-9 lg:h-11 transition-all duration-100 bg-[#c9f31d] rounded-full text-xl md:text-[23px] flex items-center justify-center"
    >
      {mode == "dark" ? (
        <TbMoonStars className="hover:rotate-[360deg] transition-all duration-500" />
      ) : (
        <MdOutlineLightMode className="hover:rotate-[360deg] transition-all duration-500" />
      )}
    </div>
  );
};

export default ThemeChange;
