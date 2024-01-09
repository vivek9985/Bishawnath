import profile from "../../assets/vivekfull.png";
import circleText from "../../assets/circle-text.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    gsap.to("#leftProfile", {
      scale: 1,
      duration: 2,
      ease: "bounce.out",
    });
    gsap.from(
      "#textOne, #textTwo, #textThree, #textFour, #textFive, #textSix, #textSeven, #textEight, #textNine, #textTen, #textEleven, #textTwelve, #textThirteen",
      {
        y: 40,
        duration: 0.7,
        stagger: 0.1,
      }
    );
    gsap.to(
      "#textOne, #textTwo, #textThree, #textFour, #textFive, #textSix, #textSeven, #textEight, #textNine, #textTen, #textEleven, #textTwelve, #textThirteen",
      {
        y: 0,
        duration: 0.7,
        stagger: 0.1,
      }
    );
    gsap.from("#title, #typing-text, #description, #hireMeButton", {
      y: 100,
      duration: 1.5,
      stagger: 0.1,
    });
    gsap.to("#title, #typing-text, #description, #hireMeButton", {
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      delay: 0.7,
    });
    gsap.to("#profile", {
      scale: 1,
      duration: 0.8,
      ease: "bounce.out",
      delay: 0.9,
    });
  }, []);

  return (
    <section className="pt-[30px] md:pt-[80px] pb-16 overflow-hidden">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* left column */}
        <div className="col-span-3">
          <div id="leftProfile" className="scale-0 w-[90px] h-[90px] relative">
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
            <h2 id="textOne">H</h2>
            <h2 id="textTwo">i,</h2>
            <h2 id="textThree" className="opacity-0">
              i
            </h2>
            <h2 id="textFour">m</h2>
            <h2 id="textFive">y</h2>
            <h2 id="textSix" className="opacity-0">
              i
            </h2>
            <h2 id="textSeven">n</h2>
            <h2 id="textEight">a</h2>
            <h2 id="textNine">m</h2>
            <h2 id="textTen">e</h2>
            <h2 id="textEleven" className="opacity-0">
              i
            </h2>
            <h2 id="textTwelve">i</h2>
            <h2 id="textThirteen">s</h2>
          </div>
          <div className="mt-2 overflow-hidden">
            <h1
              id="title"
              className="text-[50px] md:text-[75px] lg:text-[90px] text-transparent text-animation bg-cover bg-center font-medium tracking-wide lobster leading-[70px] lg:leading-[85px] pl-0.5 dark:grayscale-0 dark:invert"
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
              className="pr-4 font-medium text-gray-500 dark:text-stone-400"
            >
              I'm a front end web developer who is passionate about making error
              free website with client satisfaction. I am strategic, goal
              oriented and always work with an end goal in mind. My focus is on
              clean design, micro animations and interaction.
            </p>
          </div>
          <div className="flex overflow-hidden">
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
            className="shadow-2xl dark:shadow-[#c8f31d46] dark:shadow-lg w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-[#c9f31d] radius-animation scale-0 overflow-hidden"
          >
            <img src={profile} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
