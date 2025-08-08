/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tittle = ({ text }) => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <section>
      <div className="overflow-hidden">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center font-medium text-black dark:text-primary lobster text-3xl md:text-4xl lg:text-5xl mb-6 capitalize"
        >
          {text}
        </h2>
      </div>
    </section>
  );
};

export default Tittle;
