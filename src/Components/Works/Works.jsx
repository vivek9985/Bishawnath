import { useRef, useState, useEffect } from "react";
import Isotope from "isotope-layout";
import spectre from "../../assets/works/spectre.png"
import imash from "../../assets/works/imash.png"
import relaxly from "../../assets/works/relaxly.png"
import gadget from "../../assets/works/gadget.png"
import dreamitt from "../../assets/works/dreamitt.png"
import { MdOutlineArrowForward } from "react-icons/md";
import Tittle from "../Tittle/Tittle";


const Works = () => {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState("frontend");
    useEffect(() => {
        isotope.current = new Isotope(".filter-container", {
            itemSelector: ".filter-item",
            layoutMode: "fitRows",
        });
        return () => isotope.current?.destroy();
    }, []);
    useEffect(() => {
        if (filterKey === "*") {
            isotope.current?.arrange({ filter: "*" });
        } else {
            isotope.current?.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = (key) => () => setFilterKey(key);

    return (
        <div className="max-w-[1600px] mx-auto mt-40 pb-20">
            <div className="mx-auto flex justify-center text-center">
                <Tittle text={"Recent Works"}></Tittle>
                <sup className="mt-3 ml-1 dhurjati font-bold text-[14px] text-gray-600 dark:text-gray-400">
                    04
                </sup>
            </div>
            <ul className="mt-5 w-fit mx-auto flex items-center flex-wrap justify-center gap-3 md:gap-4 bg-[#ffffff2f] bg-opacity-80 backdrop-blur-md rounded-full px-3 md:px-4 py-2 md:py-2.5 shadow-lg transition-all duration-300">
                <li className={`text-white bg-gradient-to-br hover:bg-gradient-to-br font-medium rounded-full text-base md:text-lg px-4 md:px-5 py-1.5 md:py-2.5 text-center cursor-pointer ${filterKey === "*" ? "from-red-200 via-red-600 to-red-300 bg-gradient-to-br" : "from-blue-400 via-blue-500 to-blue-600"}`} onClick={handleFilterKeyChange("*")}>All</li>
                <li className={`text-white bg-gradient-to-br hover:bg-gradient-to-br font-medium rounded-full text-base md:text-lg px-4 md:px-5 py-1.5 md:py-2.5 text-center cursor-pointer ${filterKey === "frontend" ? "from-red-200 via-red-600 to-red-300 bg-gradient-to-br" : "from-blue-400 via-blue-500 to-blue-600"}`} onClick={handleFilterKeyChange("frontend")}>Frontend</li>
                <li className={`text-white bg-gradient-to-br hover:bg-gradient-to-br font-medium rounded-full text-base md:text-lg px-4 md:px-5 py-1.5 md:py-2.5 text-center cursor-pointer ${filterKey === "backend" ? "from-red-200 via-red-600 to-red-300 bg-gradient-to-br" : "from-blue-400 via-blue-500 to-blue-600"}`} onClick={handleFilterKeyChange("backend")}>Full Stack</li>
            </ul>
            <div className="w-10/12 mx-auto mt-7 md:mt-10">
                <div className="filter-container w-full mx-auto">
                    <a href="https://spectre-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="filter-item frontend w-[99%] lg:w-[48%] p-2.5 sm:p-4 m-2 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={spectre} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Spectre</h3>
                                <ul className="mt-1 sm:mt-2 flex items-center flex-wrap gap-y-0.5 gap-2 text-stone-400">
                                    <li>Tailwind</li>
                                    <li>Next Js</li>
                                    <li>Typescript</li>
                                </ul>
                            </div>
                            <div className="w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden bg-purple-600 group-hover:bg-white duration-500 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-4 -rotate-45">
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://imash.vercel.app/" target="_blank" rel="noopener noreferrer" className="filter-item frontend w-[99%] lg:w-[48%] p-2.5 sm:p-4 m-2 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={imash} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">imash</h3>
                                <ul className="mt-1 sm:mt-2 flex items-center flex-wrap gap-y-0.5 gap-2 text-stone-400">
                                    <li>Tailwind</li>
                                    <li>Js</li>
                                </ul>
                            </div>
                            <div className="w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden bg-purple-600 group-hover:bg-white duration-500 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-4 -rotate-45">
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://dreamit-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="filter-item frontend w-[99%] lg:w-[48%] p-2.5 sm:p-4 m-2 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={dreamitt} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Dreamitt</h3>
                                <ul className="mt-1 sm:mt-2 flex items-center flex-wrap gap-y-0.5 gap-2 text-stone-400">
                                    <li>Tailwind</li>
                                    <li>Js</li>
                                    <li>Gsap</li>
                                </ul>
                            </div>
                            <div className="w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden bg-purple-600 group-hover:bg-white duration-500 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-4 -rotate-45">
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://relaxly-modern-hotel.surge.sh/" target="_blank" rel="noopener noreferrer" className="filter-item backend w-[99%] lg:w-[48%] p-2.5 sm:p-4 m-2 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={relaxly} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Relaxly</h3>
                                <ul className="mt-1 sm:mt-2 flex items-center flex-wrap gap-y-0.5 gap-2 text-stone-400">
                                    <li>Tailwind</li>
                                    <li>React Js</li>
                                    <li>Firebase</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden bg-purple-600 group-hover:bg-white duration-500 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-4 -rotate-45">
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://gadget-world-2023.surge.sh/" target="_blank" rel="noopener noreferrer" className="filter-item backend w-[99%] lg:w-[48%] p-2.5 sm:p-4 m-2 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={gadget} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Gadget</h3>
                                <ul className="mt-1 sm:mt-2 flex items-center flex-wrap gap-y-0.5 gap-2 text-stone-400">
                                    <li>Tailwind</li>
                                    <li>React Js</li>
                                    <li>Firebase</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden bg-purple-600 group-hover:bg-white duration-500 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-4 -rotate-45">
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                    <MdOutlineArrowForward className="text-3xl text-white group-hover:text-black -translate-x-6 group-hover:translate-x-6 duration-300" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Works;
