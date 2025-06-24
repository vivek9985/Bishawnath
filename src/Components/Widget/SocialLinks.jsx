import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import ThemeChange from './../ThemeChange/ThemeChange';

const SocialLinks = () => {
    return (
        <div
            id="socials"
            className="w-[190px] md:w-[220px] h-9 md:h-11 rounded-full flex items-center justify-center gap-3 fixed left-0 right-0 bottom-4 mx-auto z-10"
        >
            <ul className="w-full h-full rounded-full flex items-center justify-center gap-4 md:gap-5 bg-[#c9f31d]">
                <a href="https://dribbble.com/vivek9985" target="_blank" rel="noopener noreferrer">
                    <FaDribbble className="hover:scale-150 transition-all duration-300"></FaDribbble>
                </a>
                <a href="https://www.instagram.com/anando_vivek/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:scale-150 transition-all duration-300"></FaInstagram>
                </a>
                <a href="https://www.linkedin.com/in/bishawnath/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:scale-150 transition-all duration-300"></FaLinkedin>
                </a>
                <a href="https://github.com/vivek9985" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:scale-150 transition-all duration-300"></FaGithub>
                </a>
            </ul>
            <div className="flex items-center justify-center cursor-pointer">
                <ThemeChange></ThemeChange>
            </div>
        </div>
    );
};

export default SocialLinks;