import { useState, useRef, useLayoutEffect } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoGrid, IoGridOutline, IoMail, IoMailOutline } from "react-icons/io5";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import hoverSound from '../../assets/tap.mp3';
import gsap from "gsap";

const navItems = [
    {
        path: "/", name: "Home", activeIcon: <GoHome className="text-3xl" />,
        icon: <GoHomeFill className="text-3xl" />
    },
    {
        path: "/about", name: "About", activeIcon: <FaRegUser className="text-[26px]" />,
        icon: <FaUser className="text-[26px]" />
    },
    {
        path: "/project", name: "Project", activeIcon: <IoGridOutline className="text-[27px]" />,
        icon: <IoGrid className="text-[27px]" />
    },
    {
        path: "/contact", name: "Contact", activeIcon: <IoMailOutline className="text-[28px]" />,
        icon: <IoMail className="text-[28px]" />
    },
    {
        path: "", name: "Resume", icon: <RiDownloadCloud2Fill className="text-[28px]" />
    },
];

const Nav = () => {
    const navRef = useRef([]);
    const audioRef = useRef(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const itemRefs = useRef([]);

    useLayoutEffect(() => {
        navItems.forEach((_, index) => {
            const el = itemRefs.current[index];
            if (!el) return;

            let size = 40;
            let translateY = 0;

            if (hoveredIndex === index) {
                size = 72;
                translateY = -8;
            } else if (hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1) {
                size = 57;
                translateY = -4;
            }
            gsap.to(el, {
                width: size,
                height: size,
                y: translateY,
                duration: 0.6,
                ease: "elastic.out(0.6, 1)",
            });
        });
        gsap.to(navRef.current, {
            bottom: "40px",
            duration: 1,
            delay: 3,
            ease: "elastic.out(1,0.7)",
        });
    }, [hoveredIndex]);

    return (
        <div
            ref={navRef}
            className={`w-fit h-[57px] rounded-2xl flex items-end justify-center fixed left-0 right-0 -bottom-20 mx-auto z-10 px-2.5 pb-[9px] ${hoveredIndex !== null ? "gap-0" : "gap-1"
                }`}
        >
            <div className="absolute left-0 top-0 bottom-0 right-0 m-auto backdrop-blur-xl border border-[#ffffff1c] rounded-2xl z-[-1] duration-500">
                <div className="w-full h-full bg-black dark:bg-[#000000] rounded-2xl relative overflow-hidden">
                    <div className="w-20 h-20 bg-white dark:bg-primary absolute right-0 top-[-50%] rounded-full blur-lg"></div>
                    <div className="w-20 h-20 bg-white dark:bg-primary absolute left-[5%] bottom-[-90%] rounded-full blur-xl"></div>
                </div>
            </div>
            {navItems?.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    onMouseEnter={() => {
                        setHoveredIndex(index)
                        audioRef.current.currentTime = 0;
                        audioRef.current.play();
                    }}
                    onMouseLeave={() => {
                        setHoveredIndex(null)
                        audioRef.current.pause();
                        audioRef.current.currentTime = 0;
                    }}
                    onClick={() => {
                        if (item?.path) {
                            navigate(item?.path)
                        }
                    }}
                    className="bg-white/50 dark:bg-black/80 backdrop-blur-sm w-[40px] h-[40px] flex items-center justify-center rounded-xl hover:rounded-2xl cursor-pointer group relative"
                >
                    <span className="duration-500 group-hover:scale-125 text-black dark:text-primary">
                        {pathname === item?.path ? <span>{item?.activeIcon}</span> : <span>{item?.icon}</span>}
                    </span>
                    {pathname === item?.path && (
                        <div className="w-1 h-1 rounded-full bg-white absolute left-0 right-0 mx-auto -bottom-[6px]" />
                    )}
                    <div className="absolute w-fit bg-black dark:bg-black px-2 pt-[3px] pb-1 left-0 right-0 mx-auto top-[-25px] text-center rounded-full scale-0 group-hover:scale-100 duration-200">
                        <p className="text-xs font-medium leading-[100%] text-white dark:text-primary">{item?.name}</p>
                    </div>
                </div>
            ))}
            <audio ref={audioRef} src={hoverSound} />
        </div>
    );
};

export default Nav;
