import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tittle from "../../Tittle/Tittle";

const servicesData = [
  {
    icon: "🎨",
    title: "Frontend Development",
    description:
      "Craft responsive, accessible, and stunning UIs using React, Tailwind CSS, and modern patterns.",
    duration: 400,
  },
  {
    icon: "⚙️",
    title: "API Integration & Backend Logic",
    description:
      "Design robust RESTful APIs, handle databases, and implement secure authentication systems.",
    duration: 600,
  },
  {
    icon: "🔐",
    title: "Authentication & Authorization",
    description:
      "Implement secure JWT-based login and role-based access control across full-stack apps.",
    duration: 800,
  },
  {
    icon: "📦",
    title: "Database Design & Optimization",
    description:
      "Model efficient MongoDB schemas and optimize queries for high performance.",
    duration: 1000,
  },
  {
    icon: "💻",
    title: "Full-Stack Web Development",
    description:
      "Build complete web apps with MongoDB, Express, React, and Node.js from backend to frontend.",
    duration: 1200,
  },
  {
    icon: "🚀",
    title: "Deployment & Optimization",
    description:
      "Deploy on Vercel or Netlify, link domains, and fine-tune app performance.",
    duration: 1400,
  },
];


const Services = () => {
  useEffect(() => {
    Aos.init({}); //once: true
  }, []);

  return (
    <section className="w-11/12 max-w-7xl pt-20 pb-10 mx-auto">
      <Tittle text="Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-5 xl:gap-7 outfit mt-10 md:mt-12">
        {servicesData.map((service, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration={service?.duration}
            className="bg-gradient-to-b from-[#d9d7d7] to-light dark:from-[#272626] dark:to-secondary p-8 rounded-3xl hover:shadow-2xl transform hover:translate-y-2 transition-all duration-500"
          >
            <div className={`text-5xl mb-8 ${service?.color}`}>
              {service?.icon}
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              {service?.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </section >
  );
};

export default Services;
