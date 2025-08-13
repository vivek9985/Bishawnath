import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "./SplitText";
import Profile from "../../Widget/Profile";
import HeroProfile from "../../Widget/HeroProfile";
import PrimaryButton from "../../ui/Button/PrimaryButton";

const Hero = () => {
  const profileRef = useRef(null);
  const subTitleRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const boxRef = useRef(null);
  const buttonRef = useRef(null);
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
    tl.from(buttonRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
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
    <section className="max-w-[1600px] mx-auto pt-[30px] md:pt-[80px] xl:pt-[90px] 2xl:pt-[150px] pb-16 2xl:pb-[180px] relative">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6">
        {/* Left Column */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="w-fit" ref={profileRef}>
            <Profile />
          </div>
          {/* Greeting */}
          <div className="w-fit leading-[90%] mt-4 pl-1 text-2xl text-gray-500 dark:text-stone-300 outfit relative overflow-hidden">
            Hi, my name is
            <div className="w-full h-full absolute top-0 left-0 bg-light dark:bg-secondary" ref={subTitleRef}
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
                className="text-accent dark:text-primary invert-0 dark:invert absolute left-0 right-0 top-0 bottom-0 m-auto z-5 splittext"
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
            <div className="w-full font-semibold uppercase flex flex-col lg:flex-row items-center gap-3 mt-4 mb-2.5">
              <h2 className="text-[22px] xl:text-[28px] leading-[100%] text-gray-950 dark:text-gray-50">
                I&apos;m a{" "}
              </h2>
              <div className="text-black dark:text-primary text-[20px] sm:text-[30px] leading-[100%]">
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
            <div className="w-full h-full absolute top-0 left-0 bg-light dark:bg-secondary" ref={roleRef}
            ></div>
          </div>
          {/* About Text */}
          <div className="overflow-hidden relative">
            <p className="max-w-[650px] pr-4 mt-2 font-light outfit text-gray-700 dark:text-stone-400">
              I&apos;m a front end web developer who is passionate about making error-free websites with client satisfaction. I am strategic, goal-oriented, and always work with an end goal in mind. My focus is on clean design, micro animations, and interaction.
            </p>
            <div className="w-full h-full absolute top-0 left-0 bg-light dark:bg-secondary" ref={boxRef}
            ></div>
          </div>
          {/* Hire Me Button */}
          <div className="flex items-center gap-4 mt-8 w-fit" ref={buttonRef}>
            <Link to="/contact">
              <PrimaryButton text="Hire Me" />
            </Link>
          </div>
        </div>

        {/* Right Column - Profile */}
        <div className="lg:col-span-2 xl:col-span-3 flex items-center justify-center lg:justify-end mt-24 lg:mt-0">
          <div ref={imageRef}>
            <HeroProfile />
          </div>
        </div>
      </div>
      {/* <div className="w-[800px] h-80 bg-primary/20 absolute -z-1 -right-28 top-40 rounded-[100%] -rotate-45 blur-[100px]"></div> */}
    </section>
  );
};

export default Hero;
