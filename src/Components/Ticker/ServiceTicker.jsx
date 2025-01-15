import gsap from "gsap";
import { useEffect } from "react";

const ServiceTicker = () => {
  useEffect(() => {
    document.body.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
        gsap.to(".service-ticke", {
          transform: "translateX(-200%)",
          duration: 10,
          repeat: -1,
          ease: "none"
        })
        gsap.to(".arr", {
          rotate: 180,
          duration: 3
        })
      } else {
        gsap.to(".service-ticke", {
          transform: "translateX(0%)",
          duration: 10,
          repeat: -1,
          ease: "none"
        })
        gsap.to(".arr", {
          rotate: 0,
          duration: 3
        })
      }
    });
  })
  const star = (
    <svg className="text-gray-200 dark:text-gray-900 arr" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
  );
  return (
    <section className="mt-16 mb-56">
      <div className="w-[110%] mx-auto bg-black dark:bg-gray-200 -mb-[85px]">
        <div className="py-4 md:py-10 flex items-center gap-12 whitespace-nowrap translate-x-[-100%] service-ticke">
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Figma to html
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Figma to bootstrap
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Figma to tailwind
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Figma to React js
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Figma to Next js
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Landing Page
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              E-commerce Website
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Business Website
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Agency Website
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Portfolio Website
            </h2>
            {star}
          </div>
          <div className="flex items-center gap-12">
            <h2 className="text-white dark:text-gray-900 text-4xl font-bold uppercase">
              Personal Website
            </h2>
            {star}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTicker;
