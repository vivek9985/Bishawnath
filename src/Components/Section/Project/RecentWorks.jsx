// import monks from "../../../assets/works/monks.webp"
// import monksTwo from "../../../assets/works/monks-2.webp"
// import monksThree from "../../../assets/works/monks-3.webp"
import spectre from "../../../assets/works/spectre.webp"
import spectreTwo from "../../../assets/works/spectre-2.webp"
import spectreThree from "../../../assets/works/spectre-3.webp"
import imash from "../../../assets/works/imash.webp"
import imashTwo from "../../../assets/works/imash-2.webp"
import imashThree from "../../../assets/works/imash-3.webp"
import dreamitt from "../../../assets/works/dreamitt.webp"
import relaxly from "../../../assets/works/relaxly.webp"
import Tittle from "../../Tittle/Tittle";
import ProjectCard from "../../Cards/ProjectCard";

const projectsData = [
    // {
    //     name: "MonksWizard",
    //     liveLink: "https://monkswizard.netlify.app/",
    //     imgOne: monks,
    //     imgTwo: monksTwo,
    //     imgThree: monksThree,
    //     technologies: ["tailwind", "typescript", "react js", "next js", "framer motion"],
    // },
    {
        name: "Spectre",
        liveLink: "https://spectre-one.vercel.app/",
        imgOne: spectre,
        imgTwo: spectreTwo,
        imgThree: spectreThree,
        technologies: ["tailwind", "typescript", "react js", "next js", "gsap"],
    },
    {
        name: "imash",
        liveLink: "https://imash.vercel.app/",
        imgOne: imash,
        imgTwo: imashTwo,
        imgThree: imashThree,
        technologies: ["tailwind", "javascript"],
    },
    {
        name: "dreamitt",
        liveLink: "https://dreamit-two.vercel.app/",
        imgOne: dreamitt,
        imgTwo: dreamitt,
        imgThree: dreamitt,
        technologies: ["tailwind", "javascript"],
    },
    {
        name: "relaxly",
        liveLink: "https://relaxly-modern-hotel.surge.sh/",
        imgOne: relaxly,
        imgTwo: relaxly,
        imgThree: relaxly,
        technologies: ["tailwind", "reac js", "firebase", "express js", "mondodb"],
    },
];

const RecentWorks = () => {
    return (
        <section className="lg:max-w-[1000px] xl:max-w-[1300px] mx-auto pt-6 pb-12 md:pt-10 md:pb-24 xl:pb-0">
            <div className="mx-auto">
                <Tittle text={"Recent Works"}></Tittle>
            </div>
            <div className="flex flex-wrap justify-center sm:gap-4 md:gap-5 xl:gap-6 mt-5 md:mt-10 lg:mt-14">
                {projectsData?.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        liveLink={project.liveLink}
                        imgOne={project.imgOne}
                        imgTwo={project.imgTwo}
                        imgThree={project.imgThree}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecentWorks;
