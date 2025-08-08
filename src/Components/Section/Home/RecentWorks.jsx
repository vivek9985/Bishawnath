import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import monks from "../../../assets/works/monks.webp"
// import monksTwo from "../../../assets/works/monks-2.webp"
// import monksThree from "../../../assets/works/monks-3.webp"
import spectre from "../../../assets/works/spectre.webp"
import spectreTwo from "../../../assets/works/spectre-2.webp"
import spectreThree from "../../../assets/works/spectre-3.webp"
import imash from "../../../assets/works/imash.webp"
import imashTwo from "../../../assets/works/imash-2.webp"
import imashThree from "../../../assets/works/imash-3.webp"
import Tittle from "../../Tittle/Tittle";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import { Link } from "react-router-dom";
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
        technologies: ["tailwind", "typescript", "next js", "gsap"],
        aos_delay: "100",
    },
    {
        name: "imash",
        liveLink: "https://imash.vercel.app/",
        imgOne: imash,
        imgTwo: imashTwo,
        imgThree: imashThree,
        technologies: ["tailwind", "javascript"],
        aos_delay: "300",
    },
];


const RecentWorks = () => {
    useEffect(() => {
        Aos.init({}); //once: true
    }, []);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1300px] mx-auto py-10">
            <div className="mx-auto">
                <Tittle text={"Recent Works"}></Tittle>
            </div>
            <div className="flex flex-wrap justify-center sm:gap-4 md:gap-5 xl:gap-6 mt-14">
                {projectsData?.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-delay={project.aos_delay || "0"}
                    >
                        <ProjectCard
                            name={project.name}
                            liveLink={project.liveLink}
                            imgOne={project.imgOne}
                            imgTwo={project.imgTwo}
                            imgThree={project.imgThree}
                            technologies={project.technologies}
                        />
                    </div>
                ))}
            </div>

            <Link to="/project" className="mt-12 lg:mt-20 block w-fit mx-auto">
                <PrimaryButton text="All Projects" />
            </Link>
        </div>
    );
};

export default RecentWorks;
