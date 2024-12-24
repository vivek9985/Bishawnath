import profile from "../../assets/vivek.png";
import circleText from "../../assets/circle-text.png";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  useGSAP(() => {
    gsap.from("#leftProfile", {
      scale: 0,
      x: 300,
      opacity: 0,
      delay: 1.3,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.from(
      "#textOne, #textTwo, #textThree, #textFour",
      {
        y: 40,
        delay: 1.6,
        duration: 0.6,
        stagger: 0.1,
      }
    );
    gsap.from("#title", {
      y: 150,
      delay: 2.3,
      duration: 0.6,
    });
    gsap.from("#typing-text", {
      y: 100,
      delay: 2.9,
      duration: 0.6,
    });
    gsap.from("#description", {
      y: 250,
      delay: 3.6,
      duration: 0.6,
    });
    gsap.from("#hireMeButton", {
      y: 80,
      delay: 3.9,
      duration: 0.6,
    });
    gsap.from("#profile", {
      scale: 0.5,
      y: 700,
      opacity: 0,
      delay: 4.3,
      duration: 0.6,
      ease: "slow(0.7,0.7,false)",
    });
  })

  return (
    <section className="max-w-[1600px] mx-auto pt-[30px] md:pt-[80px] 2xl:pt-[180px] pb-16 2xl:pb-[180px] overflow-hidden">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* left column */}
        <div className="col-span-3">
          <div id="leftProfile" className="w-[90px] h-[90px] relative">
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
          <div className="flex mt-4 pl-1 font-medium text-2xl text-gray-500 dark:text-stone-300 dhurjati overflow-hidden">
            <span id="textOne">Hi,</span>
            <span id="textTwo" className="pl-1">my</span>
            <span id="textThree" className="pl-1">name</span>
            <span id="textFour" className="pl-1">is</span>
          </div>
          <div className="mt-2 overflow-hidden">
            <h1
              id="title"
              className="text-[50px] md:text-[75px] lg:text-[90px] 2xl:text-[120px] text-transparent text-animation bg-cover bg-center font-medium tracking-wide lobster leading-[70px] lg:leading-[85px] 2xl:leading-[120px] pl-0.5 dark:grayscale-0 dark:invert"
            >
              Bishawnath
            </h1>
          </div>
          <div className="mt-1 overflow-hidden">
            <div
              id="typing-text"
              className="dhurjati font-medium flex items-center gap-3 pl-0.5"
            >
              <h2 className="text-[23px] sm:text-[33px] text-gray-950 dark:text-gray-50">
                I'm a{" "}
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
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 overflow-hidden">
            <p
              id="description"
              className="max-w-[650px] pr-4 font-medium text-gray-500 dark:text-stone-400"
            >
              I'm a front end web developer who is passionate about making error
              free website with client satisfaction. I am strategic, goal
              oriented and always work with an end goal in mind. My focus is on
              clean design, micro animations and interaction.
            </p>
          </div>
          <div className="flex items-center gap-4 overflow-hidden">
            <Link id="hireMeButton" to="/contact">
              <button className="bg-[#c9f31d] hover:bg-black dark:hover:bg-white dark:hover:text-gray-800 hover:text-gray-100 hover:duration-500 hover:ease-linear text-lg tracking-wide lobster flex items-center justify-center pl-7 pr-5 group pt-[6px] pb-[7px] rounded-full mt-6 relative">
                Hire me
                <IoIosArrowUp className="rotate-90 transition-all duration-300 group-hover:ml-1 mt-0.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* right column */}
        <div className="col-span-2 flex items-center justify-center md:justify-end mt-24 md:mt-0">
          <div
            id="profile"
            className="shadow-2xl dark:shadow-[#c8f31d46] dark:shadow-lg w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] 2xl:w-[450px] 2xl:h-[450px] bg-[#c9f31d] radius-animation overflow-hidden"
          >
            <img src={profile} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
