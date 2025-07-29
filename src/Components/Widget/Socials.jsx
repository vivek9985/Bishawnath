import { useState, useRef, useLayoutEffect } from "react";
import Hamburger from "hamburger-react";
import {
    FaBehance,
    FaDribbble,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";
import gsap from "gsap";
import { Link } from "react-router-dom";

const socialIcons = [
    { icon: <FaGithub />, slug: "https://github.com/", className: "left-6 top-3" },
    { icon: <FaLinkedinIn />, slug: "https://www.linkedin.com/", className: "top-10 -left-4" },
    { icon: <FaDribbble />, slug: "https://dribbble.com/", className: "-left-7 top-0 bottom-0 my-auto" },
    { icon: <FaBehance />, slug: "https://www.behance.net/", className: "bottom-10 -left-4" },
    { icon: <FaFacebookF />, slug: "https://www.facebook.com/", className: "bottom-3 left-6" },
];
// const socialIcons = [
//     { icon: <FaGithub />, slug: "https://github.com/vivek9985", className: "left-6 top-3" },
//     { icon: <FaLinkedinIn />, slug: "https://www.linkedin.com/in/bishawnath/", className: "top-10 -left-4" },
//     { icon: <FaDribbble />, slug: "https://dribbble.com/bishawnath-bormon", className: "-left-7 top-0 bottom-0 my-auto" },
//     { icon: <FaBehance />, slug: "https://www.behance.net/bishawnbormon", className: "bottom-10 -left-4" },
//     { icon: <FaFacebookF />, slug: "https://www.facebook.com/vivek.anando.9985", className: "bottom-3 left-6" },
// ];

const Socials = () => {
    const [active, setActive] = useState(false);
    const mode = localStorage.getItem("theme")
    const iconRefs = useRef([]);
    const circleRef = useRef();
    iconRefs.current = [];

    useLayoutEffect(() => {
        if (active) {
            gsap.to(circleRef.current, {
                rotate: -90,
                delay: 0.1,
                duration: 1,
                ease: "elastic.out(2, 3)",
            });

            gsap.to(iconRefs.current, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: 0.05,
            });
        } else {
            gsap.to(iconRefs.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                stagger: 0.03,
            });

            gsap.to(circleRef.current, {
                rotate: 90,
                duration: 0.5,
                ease: "power2.inOut",
            });
        }
    }, [active]);

    return (
        <div>
            <div onClick={() => setActive(!active)}
                className="w-20 h-fit rounded-bl-full rounded-br-full bg-accent dark:bg-primary fixed left-0 right-0 mx-auto -top-2.5 z-40 cursor-pointer scale-95 flex items-center justify-center text-center"
            >
                <Hamburger size={20} color={mode === "dark" ? "black" : "white"} toggled={active} toggle={setActive} />
            </div>
            <div
                ref={circleRef}
                className="w-[220px] h-[220px] rounded-full fixed left-0 right-0 mx-auto -top-32 z-30"
            >
                <div className="w-full h-full bg-transparent rounded-full relative">
                    {socialIcons?.map((item, index) => (
                        <Link
                            key={index}
                            to={item?.slug}
                            target="_blank"
                            ref={(el) => (iconRefs.current[index] = el)}
                            className={`absolute w-10 h-10 rounded-full text-white bg-black dark:bg-white hover:bg-accent dark:text-black dark:hover:bg-primary transition-colors duration-300 flex items-center justify-center cursor-pointer rotate-90 opacity-0 ${item?.className}`}
                        >
                            {item?.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Socials;
