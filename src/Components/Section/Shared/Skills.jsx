import { useRef } from "react";
import Tittle from "../../Tittle/Tittle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Html from "../../../assets/icons/html.svg";
import Css from "../../../assets/icons/css.svg";
import Sass from "../../../assets/icons/sass.svg";
import Tailwind from "../../../assets/icons/tailwind.svg";
import Javascript from "../../../assets/icons/js.svg";
import Typescript from "../../../assets/icons/ts.svg";
import Gsap from "../../../assets/icons/gsap.png";
import ReactIcon from "../../../assets/icons/react.svg";
import Next from "../../../assets/icons/next.svg";
import Node from "../../../assets/icons/node.svg";
import Express from "../../../assets/icons/express.svg";
import Mongodb from "../../../assets/icons/mongodb.svg";
import Mongoose from "../../../assets/icons/mongoose.svg";
import Webflow from "../../../assets/icons/webflow.svg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: Html, link: "https://html.com/" },
  { name: "CSS", icon: Css, link: "https://www.w3schools.com/css/" },
  { name: "Sass", icon: Sass, link: "https://sass-lang.com/" },
  { name: "Tailwind", icon: Tailwind, link: "https://tailwindcss.com/" },
  { name: "JavaScript", icon: Javascript, link: "https://www.javascript.com/" },
  { name: "TypeScript", icon: Typescript, link: "https://www.typescriptlang.org/" },
  { name: "GSAP", icon: Gsap, link: "https://gsap.com/" },
  { name: "React JS", icon: ReactIcon, link: "https://react.dev/" },
  { name: "Next JS", icon: Next, link: "https://nextjs.org/" },
  { name: "Node JS", icon: Node, link: "https://nodejs.org/en" },
  { name: "Express JS", icon: Express, link: "https://expressjs.com/" },
  { name: "MongoDB", icon: Mongodb, link: "https://www.mongodb.com/" },
  { name: "Mongoose", icon: Mongoose, link: "https://mongoosejs.com/" },
  { name: "Webflow", icon: Webflow, link: "https://webflow.com/" },
];

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
      },
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1600px] mx-auto my-20">
      <Tittle text="skills" />
      <div className="w-11/12 md:w-8/12 mx-auto mt-10 md:mt-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {skills.map((skill, i) => (
            <Link
              to={`${skill?.link}`}
              target="_blank"
              key={i}
              className="skill-item flex items-center gap-3 px-5 py-2.5 rounded-lg bg-stone-200 dark:bg-[#ffffff10]"
            >
              <img
                src={skill?.icon}
                alt={`${skill?.name} logo`}
                className="w-6 h-6 object-contain rounded-md grayscale dark:grayscale-0"
              />
              <span className="text-sm font-medium text-stone-900 dark:text-white">
                {skill?.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
