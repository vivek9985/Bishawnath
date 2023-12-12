import { FaGlobeAmericas } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import Tittle from "../Tittle/Tittle";
import { IoIosRocket } from "react-icons/io";

const Services = () => {
  return (
    <section className="w-9/12 py-20 mx-auto">
      <Tittle text={"Services"}></Tittle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-20">
        {/* one */}
        <div className="clip-section w-[300px] h-[200px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#ffffff] border dark:bg-black dark:border-stone-700 relative group">
          <div className="clip-container w-full h-full bg-[#1db6f3] flex items-center justify-center transition-all duration-500"></div>
          <div className="clip-card bg-transparent absolute">
            <div className="text-center text-stone-500 dark:text-stone-400">
              <p className="text-xl font-medium text-stone-900 dark:text-stone-200 group-hover:text-gray-800 duration-300">
                Create Website
              </p>
              <p className="px-3 mt-2 font-medium text-sm group-hover:text-gray-800 duration-300">
                I will create professional and eyecatching website for you. I'm
                ready to fullfill your requirements.
              </p>
            </div>
          </div>
          <span className="absolute right-3 top-3 p-1">
            <FaGlobeAmericas className="text-gray-900 dark:text-gray-100"></FaGlobeAmericas>
          </span>
        </div>
        {/* two */}
        <div className="clip-section w-[300px] h-[200px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#ffffff] border dark:bg-black dark:border-stone-700 relative group">
          <div className="clip-container w-full h-full bg-[#e5f31d] flex items-center justify-center transition-all duration-500"></div>
          <div className="clip-card bg-transparent absolute">
            <div className="text-center text-stone-500 dark:text-stone-400">
              <p className="text-xl font-medium text-stone-900 dark:text-stone-200 group-hover:text-gray-950 duration-300">
                Responsive Design
              </p>
              <p className="px-3 mt-2 font-medium text-sm group-hover:text-gray-800 duration-300">
                Ensure a seamless user experience across all devices with our
                responsive web design services. Your website will look stunning
                and function flawlessly on desktops, tablets, and smartphones.
              </p>
            </div>
          </div>
          <span className="absolute right-3 top-3 p-1">
            <MdWeb className="text-gray-900 dark:text-gray-100"></MdWeb>
          </span>
        </div>
        {/* three */}
        <div className="clip-section w-[300px] h-[200px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#ffffff] border dark:bg-black dark:border-stone-700 relative group">
          <div className="clip-container w-full h-full bg-[#7df31d] flex items-center justify-center transition-all duration-500"></div>
          <div className="clip-card bg-transparent absolute">
            <div className="text-center text-stone-500 dark:text-stone-400">
              <p className="text-xl font-medium text-stone-900 dark:text-stone-200 group-hover:text-gray-950 duration-300">
                Speed Optimization
              </p>
              <p className="px-3 mt-2 font-medium text-sm group-hover:text-gray-800 duration-300">
                Speed matters. We optimize your website's performance to deliver
                a fast and smooth user experience, improving user satisfaction
                and search engine rankings.
              </p>
            </div>
          </div>
          <span className="absolute right-3 top-3 p-1">
            <IoIosRocket  className="text-gray-900 dark:text-gray-100"></IoIosRocket>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
