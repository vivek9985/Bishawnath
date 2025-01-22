import { FaRegCircleCheck } from "react-icons/fa6";
import Tittle from "../Tittle/Tittle";
// import PricingCards from "./PricingCards";

const Pricing = () => {
    return (
        <div className="max-w-[1600px] mx-auto mt-40 pb-20">
            <div className="mx-auto flex justify-center text-center">
                <Tittle text={"Pricing Plan"}></Tittle>
                <sup className="mt-3 ml-1 dhurjati font-bold text-[14px] text-gray-600 dark:text-gray-400">
                    03
                </sup>
            </div>
            <div className="w-10/12 mx-auto mt-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border-[1px] bg-[#201E1D] border-[#2e2c2b] rounded-xl">
                        <div className="p-5 border-b-[1px] border-stone-700">
                            <h2 className="text-white text-xl font-light">Basic</h2>
                            <h2 className="text-white text-6xl font-medium tracking-[-5px] dhurjati">$15</h2>
                            <a href="/contact" className="flex items-center justify-center w-full text-center font-medium py-3 px-5 bg-gradient-to-r from-lime-300 to-yellow-300 rounded-xl mt-4">Get Started</a>
                        </div>
                        <ul className="flex flex-col gap-3 text-white p-4 mt-2">
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    3 Page design
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    3 Times revission
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    Responsive design
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="border-[1px] bg-[#201E1D] border-[#2e2c2b] rounded-xl">
                        <div className="p-5 border-b-[1px] border-stone-700">
                            <h2 className="text-white text-xl font-light">Standard</h2>
                            <h2 className="text-white text-6xl font-medium tracking-[-5px] dhurjati">$30</h2>
                            <a href="/contact" className="flex items-center justify-center w-full text-center font-medium py-3 px-5 bg-gradient-to-r from-lime-300 to-yellow-300 rounded-xl mt-4">Get Started</a>
                        </div>
                        <ul className="flex flex-col gap-3 text-white p-4 mt-2">
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    7 Page design
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    7 Times revission
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    Responsive design
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="border-[1px] bg-[#201E1D] border-[#2e2c2b] rounded-xl">
                        <div className="p-5 border-b-[1px] border-stone-700">
                            <h2 className="text-white text-xl font-light">Premium</h2>
                            <h2 className="text-white text-6xl font-medium tracking-[-5px] dhurjati">$50</h2>
                            <a href="/contact" className="flex items-center justify-center w-full text-center font-medium py-3 px-5 bg-gradient-to-r from-lime-300 to-yellow-300 rounded-xl mt-4">Get Started</a>
                        </div>
                        <ul className="flex flex-col gap-3 text-white p-4 mt-2">
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    10/12 Page design
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    Unlimited revission
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck />
                                <span>
                                    Responsive design
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
