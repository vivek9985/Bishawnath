import CountUp from "react-countup";
import Tittle from "../Tittle/Tittle";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="w-9/12 md:w-8/12 mx-auto mt-40 mb-32">
      <Tittle text={"qualifications"}></Tittle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {/* one  */}
        <div
        data-aos="fade-up"
        data-aos-duration="1100"
        className="group group-hover:after:duration-500 after:duration-500 duration-500 hover:duration-500 hover:after:right-60 origin-left hover:decoration-2 relative bg-stone-100 dark:bg-stone-900 border dark:border-stone-500 text-left p-5 pl-8 text-gray-50 dark:text-gray-900 text-base font-bold rounded-3xl overflow-hidden after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-lime-300 after:-right-4 after:top-14 after:rounded-full after:blur-lg">
          <h2 className="text-xl md:text-2xl text-gray-900 dark:text-gray-300">
            Education
          </h2>
          <div className="mt-2 font-medium text-gray-400">
            <h2 className="text-purple-500">
              Diploma in Electronic Engineering
            </h2>
            <p className="font-bold mt-2 mb-2 text-gray-900 dark:text-gray-300">
              Institute :{" "}
              <span className="text-lime-500 text-sm">
                Dhaka Polytechnic Institute
              </span>
            </p>
          </div>
        </div>

        {/* two */}
        <div
        data-aos="fade-up"
        data-aos-duration="1600"
        className="group group-hover:after:duration-500 after:duration-500 duration-500 hover:duration-500 hover:after:right-60 origin-left hover:decoration-2 relative bg-stone-100 dark:bg-stone-900 border dark:border-stone-500 text-left p-5 pl-8 text-gray-50 dark:text-gray-900 text-base font-bold rounded-3xl overflow-hidden after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:-right-4 after:top-14 after:rounded-full after:blur-lg">
          <h2 className="text-xl md:text-2xl text-gray-900 dark:text-gray-300">
            Experience
          </h2>
          <div className="text-5xl mt-2 font-bold text-rose-500">
            <CountUp start={-20} end={2} duration={2}></CountUp>
            <span>+</span>
          </div>
          <p className="mt-3 text-gray-900 dark:text-gray-300">Years</p>
        </div>

        {/* three */}
        <div
        data-aos="fade-up"
        data-aos-duration="2100"
        className="group group-hover:after:duration-500 after:duration-500 duration-500 hover:duration-500 hover:after:right-60 origin-left hover:decoration-2 relative bg-stone-100 dark:bg-stone-900 border dark:border-stone-500 text-left p-5 pl-8 text-gray-50 dark:text-gray-900 text-base font-bold rounded-3xl overflow-hidden after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:-right-4 after:top-14 after:rounded-full after:blur-lg">
          <h2 className="text-xl md:text-2xl text-gray-900 dark:text-gray-300">
            Projects
          </h2>
          <div className="text-5xl mt-2 font-bold text-blue-500">
            <CountUp start={-20} end={25} duration={2}></CountUp>
            <span>+</span>
          </div>
          <p className="mt-3 text-gray-900 dark:text-gray-300">Completed</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
