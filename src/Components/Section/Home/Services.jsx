import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tittle from "../../Tittle/Tittle";

const servicesData = [
  {
    icon: "🎨",
    title: "Frontend Development",
    description:
      "Craft responsive, accessible, and stunning user interfaces using React, Tailwind CSS, and modern component patterns.",
    color: "text-pink-500",
    animation: "fade-up",
  },
  {
    icon: "⚙️",
    title: "API Integration & Backend Logic",
    description:
      "Design and integrate robust RESTful APIs, manage database schemas, and implement secure authentication systems.",
    color: "text-green-500",
    animation: "fade-up",
  },
  {
    icon: "💻",
    title: "Full-Stack Web Development",
    description:
      "Build complete web applications using MongoDB, Express, React, and Node.js — from backend APIs to frontend UIs.",
    color: "text-blue-500",
    animation: "fade-up",
  },
  {
    icon: "🔐",
    title: "Authentication & Authorization",
    description:
      "Implement secure login systems using JWT and role-based access control across your full-stack apps.",
    color: "text-red-500",
    animation: "fade-up",
  },
  {
    icon: "📦",
    title: "Database Design & Optimization",
    description:
      "Model efficient MongoDB schemas and optimize queries for scalability and performance.",
    color: "text-purple-500",
    animation: "fade-up",
  },
  {
    icon: "🚀",
    title: "Deployment & Optimization",
    description:
      "Deploy apps on Vercel, Netlify, domain linking, and performance tuning.",
    color: "text-yellow-500",
    animation: "fade-up",
  },
];

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-11/12 max-w-7xl pt-20 pb-10 mx-auto">
      <Tittle text="Services" />
      <p className="text-center outfit text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 md:mb-16">
        As a MERN Stack Developer, I craft full-stack web solutions that are fast, responsive, and scalable. Here&apos;s what I can do for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-5 xl:gap-7 outfit">
        {servicesData.map((service, i) => (
          <div
            key={i}
            data-aos={service?.animation}
            className="bg-gradient-to-b from-[#d9d7d7] to-light dark:from-[#272626] dark:to-secondary p-8 rounded-3xl hover:shadow-2xl transform hover:translate-y-2 transition-all duration-500"
          >
            <div className={`text-5xl mb-8 ${service?.color}`}>
              {service?.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {service?.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
