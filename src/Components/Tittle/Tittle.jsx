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
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center font-bold text-transparent dhurjati text-5xl mb-6 uppercase section-title"
        >
          {text}
        </h1>
      </div>
    </section>
  );
};

export default Tittle;
