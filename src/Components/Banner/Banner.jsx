import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import profile from "../../assets/vivek.png";
import circleText from "../../assets/circle-text.png";

const Banner = () => {
  const fadeRefs = useRef([]);
  const profileRef = useRef(null);
  const textPhotoWrap = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(fadeRefs.current, {
      y: 80,
      opacity: 0,
      duration: 0.5,
      // ease: "power1.out",
      ease: "slow(0.7,0.7,false)",
      stagger: 0.2,
    }).from(
      profileRef.current,
      {
        scale: 0.5,
        y: 300,
        opacity: 0,
        duration: 0.5,
        // ease: "power3.out",
        ease: "slow(0.7,0.7,false)",
      },
      "-=0.6"
    );
  }, []);

  const addToFadeRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <section className="max-w-[1600px] mx-auto pt-[30px] md:pt-[80px] xl:pt-[90px] 2xl:pt-[150px] pb-16 2xl:pb-[180px] overflow-hidden">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
        {/* Left Column */}
        <div className="col-span-3" ref={textPhotoWrap}>
          {/* Circular profile badge */}
          <div className="w-[90px] h-[90px] relative" ref={addToFadeRefs}>
            <div className="w-[90px] h-[90px] overflow-hidden rotate-animation">
              <img
                src={circleText}
                alt="text"
                className="w-full h-full rounded-full select-none dark:invert"
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
                    <span className="w-[10px] h-[10px] rounded-full absolute bg-[#50d344] opacity-80"></span>
                    <span className="w-[10px] h-[10px] rounded-full absolute bg-[#50d344] opacity-80"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div
            className="mt-4 pl-1 font-medium text-2xl text-gray-500 dark:text-stone-300 dhurjati"
            ref={addToFadeRefs}
          >
            Hi, my name is
          </div>

          {/* Name */}
          <div ref={addToFadeRefs}>
            <h1 className="text-[50px] md:text-[75px] lg:text-[90px] 2xl:text-[120px] text-transparent text-animation bg-cover bg-center font-medium tracking-wide lobster leading-[70px] lg:leading-[85px] 2xl:leading-[120px] pl-0.5 dark:grayscale-0 dark:invert">
              Bishawnath
            </h1>
          </div>

          {/* Role */}
          <div ref={addToFadeRefs}>
            <div className="dhurjati font-medium flex items-center gap-3 pl-0.5">
              <h2 className="text-[23px] sm:text-[33px] text-gray-950 dark:text-gray-50">
                I&apos;m a{" "}
              </h2>
              <div className="pt-0.5 text-fuchsia-700 dark:text-cyan-300">
                <TypeAnimation
                  className="font-medium text-[20px] sm:text-[33px]"
                  sequence={[
                    "Web Developer.",
                    1000,
                    "Front-end Developer.",
                    1000,
                    "React Developer.",
                    1000,
                    "Next Js Developer.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div ref={addToFadeRefs}>
            <p className="max-w-[650px] pr-4 mt-2 font-medium text-gray-500 dark:text-stone-400">
              I&apos;m a front end web developer who is passionate about making error-free websites with client satisfaction. I am strategic, goal-oriented, and always work with an end goal in mind. My focus is on clean design, micro animations, and interaction.
            </p>
          </div>

          {/* Hire Me Button */}
          <div className="flex items-center gap-4" ref={addToFadeRefs}>
            <Link to="/contact">
              <button className="bg-[#c9f31d] hover:bg-black dark:hover:bg-white dark:hover:text-gray-800 hover:text-gray-100 hover:duration-500 hover:ease-linear text-lg tracking-wide lobster flex items-center justify-center pl-7 pr-5 group pt-[6px] pb-[7px] rounded-full mt-6 relative">
                Hire me
                <IoIosArrowUp className="rotate-90 transition-all duration-300 group-hover:ml-1 mt-0.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Profile */}
        <div className="col-span-2 flex items-center justify-center lg:justify-end mt-24 lg:mt-0">
          <div
            ref={profileRef}
            className="shadow-2xl dark:shadow-[#c8f31d46] dark:shadow-lg w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] 2xl:w-[450px] 2xl:h-[450px] bg-[#c9f31d] radius-animation overflow-hidden"
          >
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
