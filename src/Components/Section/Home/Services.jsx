import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tittle from "../../Tittle/Tittle";
import { IoIosColorPalette, IoIosSettings, IoIosRocket } from "react-icons/io";
import { FaUserLock, FaDatabase } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";


const servicesData = [
  {
    icon: <IoIosColorPalette />,
    title: "Frontend Development",
    description:
      "Craft responsive, accessible, and stunning UIs using React, Tailwind CSS, and modern patterns.",
    aos_delay: 100,
  },
  {
    icon: <IoIosSettings />,
    title: "API Integration & Backend Logic",
    description:
      "Design robust RESTful APIs, handle databases, and implement secure authentication systems.",
    aos_delay: 200,
  },
  {
    icon: <FaUserLock />,
    title: "Authentication & Authorization",
    description:
      "Implement secure JWT-based login and role-based access control across full-stack apps.",
    aos_delay: 300,
  },
  {
    icon: <FaDatabase />,
    title: "Database Design & Optimization",
    description:
      "Model efficient MongoDB schemas and optimize queries for high performance.",
    aos_delay: 400,
  },
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Web Development",
    description:
      "Build complete web apps with MongoDB, Express, React, and Node.js from backend to frontend.",
    aos_delay: 500,
  },
  {
    icon: <IoIosRocket />,
    title: "Deployment & Optimization",
    description:
      "Deploy on Vercel or Netlify, link domains, and fine-tune app performance.",
    aos_delay: 600,
  },
];


const Services = () => {
  useEffect(() => {
    Aos.init({}); //once: true
  }, []);

  return (
    <section className="max-w-[1300px] w-11/12 pt-20 pb-10 mx-auto">
      <Tittle text="Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-5 outfit mt-10 md:mt-12">
        {servicesData.map((service, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={service?.aos_delay}
            className="bg-white dark:bg-black/20 border-[#F8F8F8] dark:border-[#1d1d1d] border-[6px] p-8 rounded-3xl transition-all duration-500"
          >
            <div className="bg-black/10 dark:bg-black flex items-center justify-center w-14 h-14 rounded-full text-3xl mb-7 text-black dark:text-white">
              {service?.icon}
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              {service?.title}
            </h3>
            <p className="text-gray-600 dark:text-stone-400">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </section >
  );
};

export default Services;
