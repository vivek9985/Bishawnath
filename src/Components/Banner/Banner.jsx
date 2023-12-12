import profile from "../../assets/vivekfull.png";
import circleText from "../../assets/text.png";
import { useRef } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  const image = useRef();
  gsap.from(image.current, {
    y: 300,
  });
  gsap.to(image.current, {
    y: 0,
    duration: 1.5,
  });

  return (
    <section className="pt-[30px] md:pt-[80px] pb-16 overflow-hidden">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* left column */}
        <div className="col-span-3">
          <div>
            <div className="w-[90px] h-[90px] relative">
              <div className="w-[90px] h-[90px] overflow-hidden rotate-animation">
                <img
                  src={circleText}
                  alt="text"
                  className="w-full h-full rounded-full select-none invert"
                />
              </div>
              <div className="absolute w-14 h-14 top-0 bottom-0 left-0 right-0 m-auto">
                <div className="relative bg-[#e2684a] rounded-full">
                  <img
                    src={profile}
                    alt="Vivek"
                    className="w-full h-full rounded-full select-none"
                  />
                  <div className="absolute bottom-1 right-1 z-50 animation-btn">
                    <div className="w-[10px] h-[10px] bg-[#50d344] rounded-full">
                      <span
                        style={{ "--i": 0 }}
                        className="w-[10px] h-[10px]  rounded-full absolute bg-[#50d344] opacity-80"
                      ></span>
                      <span
                        style={{ "--i": 1 }}
                        className="w-[10px] h-[10px]  rounded-full absolute bg-[#50d344] opacity-80"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-4 font-semibold italic gradient-text">
            HI, MY NAME IS{" "}
          </h2>
          <h1 className="text-[75px] lg:text-[90px] text-transparent text-animation bg-cover bg-center font-medium tracking-wider lobster leading-[70px] lg:leading-[85px] pl-1 grayscale dark:grayscale-0 dark:invert">
            <span className="text-[110px] lg:text-[130px]">v</span>ivek Anando
          </h1>
          <div className="mt-3 font-semibold flex items-center gap-3">
            <h2 className="text-[23px] sm:text-[28px] text-gray-950 dark:text-gray-50">
              I'm a{" "}
            </h2>
            <div className="pt-1 text-purple-500">
              <TypeAnimation
                className="font-medium text-[20px] sm:text-[28px]"
                sequence={[
                  "Web Developer.",
                  1000,
                  "Front-end Developer.",
                  1000,
                  "React Developer.",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </div>
          <p className="mt-4 pr-4 font-medium text-gray-500 dark:text-stone-400">
            I'm a front end web developer who is passionate about making error
            free website with client satisfaction. I am strategic, goal oriented
            and always work with an end goal in mind. My focus is on clean
            design, micro animations and interaction.
          </p>
          <Link to="/contact">
            <button className="bg-[#c9f31d] hover:bg-[#c8f31d81] text-lg tracking-wide lobster flex items-center justify-center pl-7 pr-5 group pt-[6px] pb-[7px] rounded-full mt-6 relative">
              Hire me
              <IoIosArrowUp className="rotate-90 transition-all duration-300 group-hover:ml-1 mt-0.5" />
            </button>
          </Link>
        </div>

        {/* right column */}
        <div className="col-span-2 flex items-center justify-center md:justify-end mt-24 md:mt-0">
          <div className="shadow-2xl dark:shadow-[#c8f31d46] dark:shadow-lg w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-[#c9f31d] radius-animation overflow-hidden">
            <img src={profile} alt="" className="w-full h-full" ref={image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
