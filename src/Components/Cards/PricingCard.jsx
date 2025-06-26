/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/Button/PrimaryButton";

// Feature data
const frontEndBasicData = [
    { item: "3 Page design", status: true },
    { item: "Responsive design", status: true },
    { item: "Source files", status: true },
    { item: "Custom animation", status: false },
    { item: "Admin panel", status: false },
];
const frontEndMediumData = [
    { item: "7 Page design", status: true },
    { item: "Responsive design", status: true },
    { item: "Source files", status: true },
    { item: "Custom animation", status: true },
    { item: "Admin panel", status: false },
];
const frontEndPremiumData = [
    { item: "12+ Page design", status: true },
    { item: "Responsive design", status: true },
    { item: "Source files", status: true },
    { item: "Custom animation", status: true },
    { item: "Admin panel", status: true },
];

const mernBasicData = [
    { item: "3 Page MERN App", status: true },
    { item: "User Authentication", status: true },
    { item: "Responsive Design", status: true },
    { item: "Admin Panel", status: false },
    { item: "Payment Integration", status: false },
];

const mernMediumData = [
    { item: "7 Page MERN App", status: true },
    { item: "User Authentication", status: true },
    { item: "Responsive Design", status: true },
    { item: "Admin Panel", status: true },
    { item: "Payment Integration", status: false },
];

const mernPremiumData = [
    { item: "12+ Page MERN App", status: true },
    { item: "User Authentication", status: true },
    { item: "Responsive Design", status: true },
    { item: "Admin Panel", status: true },
    { item: "Payment Integration", status: true },
];


const PricingCard = ({ type = "basic", price = 25, variant = "", className = "" }) => {

    return (
        <div className={`w-[300px] overflow-hidden relative rounded-3xl shadow-2xl shadow-light dark:shadow-secondary ${className}`}>
            <div className={`relative z-10 w-full h-full rounded-t-3xl pt-10 pb-8 px-10 border-t-[1px] border-l-[1px] border-[#e9dada] dark:border-[#31313131] ${type === "medium" ? "lg:pt-16" : ""}`}>
                <div>
                    <h4 className="text-stone-800 dark:text-white text-lg font-medium outfit capitalize">{type}</h4>
                    <h3 className="text-stone-800 dark:text-white text-[52px] leading-[100%] font-medium tracking-[-1px] lobstar mt-2">
                        ${price}
                    </h3>
                    <ul className="flex flex-col gap-3 text-stone-800 dark:text-white outfit my-7 pb-5">
                        {type === "basic" && variant === "fronEnd" &&
                            frontEndBasicData?.map((list, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div
                                        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-stone-300 dark:text-black ${list?.status ? "bg-accent dark:bg-primary" : "bg-stone-500"
                                            }`}
                                    >
                                        {list?.status ? <FaCheck size={12} /> : <IoClose size={14} />}
                                    </div>
                                    <span className="text-[15px] leading-[100%]">{list?.item}</span>
                                </li>
                            ))
                        }
                        {
                            type === "medium" && variant === "fronEnd" &&
                            frontEndMediumData?.map((list, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div
                                        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-stone-300 dark:text-black ${list?.status ? "bg-accent dark:bg-primary" : "bg-stone-500"
                                            }`}
                                    >
                                        {list?.status ? <FaCheck size={12} /> : <IoClose size={14} />}
                                    </div>
                                    <span className="text-[15px] leading-[100%]">{list?.item}</span>
                                </li>
                            ))
                        }
                        {
                            type === "premium" && variant === "fronEnd" &&
                            frontEndPremiumData?.map((list, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div
                                        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-stone-300 dark:text-black ${list?.status ? "bg-accent dark:bg-primary" : "bg-stone-500"
                                            }`}
                                    >
                                        {list?.status ? <FaCheck size={12} /> : <IoClose size={14} />}
                                    </div>
                                    <span className="text-[15px] leading-[100%]">{list?.item}</span>
                                </li>
                            ))
                        }
                        {
                            type === "basic" && variant === "mern" &&
                            mernBasicData?.map((list, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div
                                        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-stone-300 dark:text-black ${list?.status ? "bg-accent dark:bg-primary" : "bg-stone-500"
                                            }`}
                                    >
                                        {list?.status ? <FaCheck size={12} /> : <IoClose size={14} />}
                                    </div>
                                    <span className="text-[15px] leading-[100%]">{list?.item}</span>
                                </li>
                            ))
                        }
                        {
                            type === "medium" && variant === "mern" &&
                            mernMediumData?.map((list, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div
                                        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-stone-300 dark:text-black ${list?.status ? "bg-accent dark:bg-primary" : "bg-stone-500"
                                            }`}
                                    >
                                        {list?.status ? <FaCheck size={12} /> : <IoClose size={14} />}
                                    </div>
                                    <span className="text-[15px] leading-[100%]">{list?.item}</span>
                                </li>
                            ))
                        }
                        {
                            type === "premium" && variant === "mern" &&
                            mernPremiumData?.map((list, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div
                                        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-stone-300 dark:text-black ${list?.status ? "bg-accent dark:bg-primary" : "bg-stone-500"
                                            }`}
                                    >
                                        {list?.status ? <FaCheck size={12} /> : <IoClose size={14} />}
                                    </div>
                                    <span className="text-[15px] leading-[100%]">{list?.item}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <Link to="/contact">
                        <PrimaryButton text="Let's Talk" className="w-full" />
                    </Link>
                </div>
            </div>
            <div className="absolute z-0 left-0 top-0 w-full h-full bg-gradient-to-b from-[#d9d7d7] to-light dark:from-[#272626] dark:to-secondary rounded-3xl">
            </div>
        </div>
    );
};

export default PricingCard;
