import spectre from "../../assets/works/spectre.png"
import imash from "../../assets/works/imash.png"
// import relaxly from "../../assets/works/relaxly.png"
// import gadget from "../../assets/works/gadget.png"
// import dreamitt from "../../assets/works/dreamitt.png"
import monks from "../../assets/works/monks.png"
import { MdOutlineArrowForward } from "react-icons/md";
import Tittle from "../Tittle/Tittle";



const RecentWorks = () => {
    return (
        <div className="max-w-[1600px] mx-auto mt-40 pb-20">
            <div className="mx-auto flex justify-center text-center">
                <Tittle text={"Recent Works"}></Tittle>
                <sup className="mt-3 ml-1 dhurjati font-bold text-[14px] text-gray-600 dark:text-gray-400">
                    06
                </sup>
            </div>
            <div className="w-10/12 mx-auto mt-7 md:mt-10">
                <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
                    <a href="https://spectre-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full p-2.5 sm:p-4 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
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
                    <a href="https://monkswizard.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full p-2.5 sm:p-4 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={monks} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Monks Wizard</h3>
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
                    <a href="https://imash.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full p-2.5 sm:p-4 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
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
                    {/* <a href="https://dreamit-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full p-2.5 sm:p-4 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
                        <div>
                            <img className="w-[100%] h-[100%] rounded-xl" src={dreamitt} alt="" />
                        </div>
                        <div className="mt-2 p-3 flex items-center justify-between">
                            <div className="w-10/12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Dreamitt</h3>
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
                    <a href="https://relaxly-modern-hotel.surge.sh/" target="_blank" rel="noopener noreferrer" className="w-full p-2.5 sm:p-4 border-[1px] border-[#a258ec94] overflow-hidden rounded-xl works-bg group">
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
                    </a> */}
                </div>
            </div>

        </div>
    );
};

export default RecentWorks;
