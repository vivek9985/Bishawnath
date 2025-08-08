/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const PrimaryButton = ({ text = "Click here", type = "button", className = "" }) => {
    return (
        <button
            type={type}
            className={`flex items-center justify-center pl-5 pr-[52px] py-4 rounded-full bg-black dark:bg-primary outfit text-lg leading-[100%] relative overflow-hidden group ${className}`}>
            <span className="text-white dark:text-black group-hover:opacity-0 duration-300">{text}</span>
            <span className="text-black dark:text-white absolute z-10 opacity-0 group-hover:opacity-100 duration-300">{text}</span>
            <div className="absolute -z-2 right-1.5 left-1.5 ml-auto mr-0 top-0 bottom-0 my-auto bg-white dark:bg-black w-10 h-10 group-hover:w-[calc(100%_-_12px)] duration-500 rounded-full flex items-center justify-end">
                <FaArrowRightLong className="text-black dark:text-white text-base -rotate-45 group-hover:rotate-0 duration-500 -translate-x-3" />
            </div>
        </button>
    );
};

export default PrimaryButton;