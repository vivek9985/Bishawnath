import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
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
          className="text-center font-medium text-transparent dark:text-primary lobster text-5xl mb-6 capitalize section-title"
        >
          {text}
        </h2>
      </div>
    </section>
  );
};

export default Tittle;
