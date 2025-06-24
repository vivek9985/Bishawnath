import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";

const ThemeChange = () => {
  const [mode, setMode] = useState("dark");
  const changeTheme = () => {
    const html = document.documentElement;
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme", "dark");
      localStorage.setItem("theme", "light");
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
    }
  };
  return (
    <div
      onClick={changeTheme}
      className="w-11 h-11 bg-[#c9f31d] rounded-full text-xl md:text-[23px] flex items-center justify-center hover:rotate-[360deg] transition-all duration-500"
    >
      {mode == "dark" ? (
        <MdOutlineLightMode />
      ) : (
        <TbMoonStars />
      )}
    </div>
  );
};

export default ThemeChange;
