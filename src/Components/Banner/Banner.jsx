import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import profile from "../../assets/vivek.png";
import circleText from "../../assets/circle-text.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "./SplitText";

const Banner = () => {
  const profileRef = useRef(null);
  const subTitleRef = useRef(null);
  const roleRef = useRef(null);
  const boxRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(profileRef.current, {
      scale: 0,
      delay: 0.1,
      duration: 0.5,
      ease: "power1.out",
    });
    tl.to([subTitleRef.current, roleRef.current, boxRef.current], {
      width: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power1.out",
      stagger: 0.3,
    });
    tl.from(imageRef.current, {
      opacity: 0,
      transform: 'translateY(300px)',
      duration: 1.2,
      ease: "elastic.out(1,0.6)",
    });
    gsap.to(".splittext", {
      opacity: 0,
      duration: 0.7,
      delay: 2.5,
      ease: "power3.out",
    });
    gsap.to(nameRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 1.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="max-w-[1600px] mx-auto pt-[30px] md:pt-[80px] xl:pt-[90px] 2xl:pt-[150px] pb-16 2xl:pb-[180px]">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-6">
        {/* Left Column */}
        <div className="col-span-3">
          <div className="w-[90px] h-[90px] relative" ref={profileRef}>
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
          <div className="w-fit leading-[90%] mt-4 pl-1 font-medium text-2xl text-gray-500 dark:text-stone-300 dhurjati relative overflow-hidden">
            Hi, my name is
            <div className="w-full h-full absolute top-0 left-0 bg-[#fffaf1] dark:bg-[#161616]" ref={subTitleRef}
            ></div>
          </div>

          {/* Name */}
          <div className="overflow-hidden w-fit mt-4">
            <h1
              className="text-[50px] md:text-[75px] lg:text-[90px] 2xl:text-[120px] text-animation bg-cover bg-center font-medium tracking-wide lobster leading-[70px] lg:leading-[85px] 2xl:leading-[110px] pl-0.5 dark:grayscale-0 dark:invert relative text-transparent"
            >
              <SplitText
                text="Bishawnath"
                type="chars"
                className="text-[#580094] dark:text-[#c9f31d] invert-0 dark:invert absolute left-0 right-0 top-0 bottom-0 m-auto z-5 splittext"
                animation={{
                  y: 150,
                  delay: 1.5,
                  duration: 0.4,
                  ease: "power1.out",
                  stagger: 0.05,
                }}
              />
              <span className="opacity-0" ref={nameRef}>Bishawnath</span>
            </h1>
          </div>

          {/* Role */}
          <div className="w-full overflow-hidden relative">
            <div className="w-full font-semibold uppercase flex items-center gap-3 mt-4 mb-2.5">
              <h2 className="text-[22px] sm:text-[28px] leading-[100%] text-gray-950 dark:text-gray-50">
                I&apos;m a{" "}
              </h2>
              <div className="text-fuchsia-700 dark:text-sky-400 text-[20px] sm:text-[30px] leading-[100%]">
                <TypeAnimation
                  sequence={[
                    "Mern Developer.",
                    1000,
                    "Express Js Developer.",
                    1000,
                    "React Js Developer.",
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
            <div className="w-full h-full absolute top-0 left-0 bg-[#fffaf1] dark:bg-[#161616]" ref={roleRef}
            ></div>
          </div>

          {/* About Text */}
          <div className="overflow-hidden relative">
            <p className="max-w-[650px] pr-4 mt-2 font-semibold text-gray-500 dark:text-stone-400">
              I&apos;m a front end web developer who is passionate about making error-free websites with client satisfaction. I am strategic, goal-oriented, and always work with an end goal in mind. My focus is on clean design, micro animations, and interaction.
            </p>
            <div className="w-full h-full absolute top-0 left-0 bg-[#fffaf1] dark:bg-[#161616]" ref={boxRef}
            ></div>
          </div>

          {/* Hire Me Button */}
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <button className="bg-[#c9f31d] hover:bg-black dark:hover:bg-white dark:hover:text-gray-800 hover:text-gray-100 hover:duration-500 hover:ease-linear text-lg tracking-wide lobster flex items-center justify-center pl-7 pr-5 group pt-[6px] pb-[7px] rounded-full mt-6 relative">
                Hire me
                <IoIosArrowUp className="rotate-90 transition-all duration-300 group-hover:ml-1 mt-0.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Profile */}
        <div className="col-span-3 flex items-center justify-center lg:justify-end mt-24 lg:mt-0">
          <div className="shadow-2xl dark:shadow-[#c8f31d46] dark:shadow-lg w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] 2xl:w-[450px] 2xl:h-[450px] bg-[#c9f31d] radius-animation overflow-hidden" ref={imageRef}>
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
