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

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: Html },
  { name: "CSS", icon: Css },
  { name: "Sass", icon: Sass },
  { name: "Tailwind", icon: Tailwind },
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "GSAP", icon: Gsap },
  { name: "React JS", icon: ReactIcon },
  { name: "Next JS", icon: Next },
  { name: "Node JS", icon: Node },
  { name: "Express JS", icon: Express },
  { name: "MongoDB", icon: Mongodb },
  { name: "Mongoose", icon: Mongoose },
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
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex items-center gap-3 px-5 py-2.5 rounded-lg bg-stone-200 dark:bg-[#ffffff10]"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-6 h-6 object-cover rounded-md"
              />
              <span className="text-sm font-medium text-stone-900 dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
