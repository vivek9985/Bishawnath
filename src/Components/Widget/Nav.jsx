import { useState, useRef, useLayoutEffect } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoGrid, IoGridOutline, IoMail, IoMailOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

const navItems = [
    {
        path: "/", name: "Home", icon: <GoHome className="text-3xl" />,
        activeIcon: <GoHomeFill className="text-3xl" />
    },
    {
        path: "/about", name: "About", icon: <FaRegUser className="text-[26px]" />,
        activeIcon: <FaUser className="text-[26px]" />
    },
    {
        path: "/contact", name: "Project", icon: <IoGridOutline className="text-[27px]" />,
        activeIcon: <IoGrid className="text-[27px]" />
    },
    {
        path: "/contact", name: "Contact", icon: <IoMailOutline className="text-[28px]" />,
        activeIcon: <IoMail className="text-[28px]" />
    },
];

const Nav = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const itemRefs = useRef([]);

    useLayoutEffect(() => {
        navItems.forEach((_, index) => {
            const el = itemRefs.current[index];
            if (!el) return;

            let size = 45;
            let translateY = 0;

            if (hoveredIndex === index) {
                size = 75;
                translateY = -8;
            } else if (hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1) {
                size = 60;
                translateY = -4;
            }

            gsap.to(el, {
                width: size,
                height: size,
                y: translateY,
                duration: 0.6,
                ease: "elastic.out(0.5, 1)",
                // ease: "power4.out",
                // ease: "back.out(1.7)",
            });
        });
    }, [hoveredIndex]);

    return (
        <div
            className={`w-fit h-[65px] rounded-2xl flex items-end justify-center fixed left-0 right-0 bottom-12 mx-auto z-10 px-2.5 pb-[11px] ${hoveredIndex !== null ? "gap-2" : "gap-1.5"
                }`}
        >
            <div className="absolute left-0 top-0 bottom-0 right-0 m-auto backdrop-blur-xl border border-[#ffffff2e] rounded-2xl z-[-1] duration-500">
                <div className="w-full h-full bg-lime-30 rounded-2xl relative overflow-hidden">
                    <div className="w-20 h-20 bg-blue-500 absolute right-0 top-[-50%] rounded-full blur-lg"></div>
                </div>
            </div>
            {navItems.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={()=>navigate(item?.path)}
                    className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-[14px] cursor-pointer group relative"
                >
                    <span className="duration-500 group-hover:scale-125 text-sky-500">
                        {pathname === item?.path ? <span>{item?.activeIcon}</span> : <span>{item?.icon}</span>}
                    </span>
                    {pathname === item?.path && (
                        <div className="w-1 h-1 rounded-full bg-white absolute left-0 right-0 mx-auto -bottom-[6px]" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Nav;
