import Tittle from "../../Tittle/Tittle";
import "aos/dist/aos.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", icon: "https://raw.githubusercontent.com/vivek9985/vivek9985/68f9b4dc93bb48e37f7b869a7579a68d530a5ff2/HTML.svg" },
    { id: 2, name: "CSS", icon: "https://raw.githubusercontent.com/vivek9985/vivek9985/68f9b4dc93bb48e37f7b869a7579a68d530a5ff2/CSS.svg" },
    { id: 3, name: "SCSS", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" },
    { id: 4, name: "Tailwind", icon: "https://raw.githubusercontent.com/vivek9985/vivek9985/68f9b4dc93bb48e37f7b869a7579a68d530a5ff2/TailwindCSS.svg" },
    { id: 5, name: "Javascript", icon: "https://raw.githubusercontent.com/vivek9985/vivek9985/68f9b4dc93bb48e37f7b869a7579a68d530a5ff2/JavaScript.svg" },
    { id: 6, name: "Typescript", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" },
    { id: 7, name: "Gsap", icon: "https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256" },
    { id: 8, name: "React", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" },
    { id: 9, name: "Next Js", icon: "https://www.robiulhasan.dev/images/icons/next-js.png" },
    { id: 10, name: "Node Js", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" },
    { id: 11, name: "Express", icon: "https://www.robiulhasan.dev/images/icons/express.png" },
    { id: 12, name: "MongoDB", icon: "https://www.robiulhasan.dev/images/icons/mongodb.png" },
    { id: 13, name: "Mongoose", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" },
  ];

  useGSAP(() => {
    gsap.from(".skill", {
      scrollTrigger: {
        trigger: ".skill",
        start: "top 90%",
        end: "bottom 30%",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2
    })
  })
  return (
    <section className="max-w-[1600px] mx-auto my-20">
      <Tittle text={"skills"}></Tittle>
      <div className="w-11/12 md:w-8/12 mx-auto mt-10">
        <div className="flex items-center justify-center flex-wrap gap-3">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 px-5 py-2.5 rounded-md bg-[#00000030] dark:bg-[#ffffff10] skill"
            >
              <img
                className="w-6 h-6"
                src={item.icon}
                alt={`${item.name} logo`}
              />
              <span className="text-sm font-medium text-stone-900 dark:text-white">{item.name}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
