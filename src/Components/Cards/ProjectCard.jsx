/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import folder from "../../assets/works/folder-back.svg"
import w from "../../assets/works/w.png"

const ProjectCard = ({ name, liveLink, imgOne, imgTwo, imgThree, technologies, className = "" }) => {
    return (
        <div className={`w-[400px] rounded-3xl py-8 bg-white dark:bg-[#000000] border-[5px] border-[#f8f8f8] dark:border-[#1d1d1d] scale-95 sm:scale-100 ${className}`}>
            <div className="w-[338px] h-[270px] rounded-[18px] mx-auto relative group perspective-wrapper scale-[0.8] sm:scale-100">
                <img className="w-full h-full rounded-xl object-contain d" style={{ filter: "drop-shadow(-1px -2px 0px #ffffff)" }} src={folder} alt="" />
                <div>
                    <img
                        className="w-[260px] h-[150px] object-cover object-top rounded-xl absolute top-12 left-10 group-hover:-translate-y-28 duration-500 ease-out"
                        src={imgOne}
                        alt=""
                    />
                    <img
                        className="w-[260px] h-[150px] object-cover object-top rounded-xl absolute top-16 left-10 z-[2] group-hover:-left-10 group-hover:top-7 group-hover:rotate-[-15deg] duration-500 ease-out"
                        src={imgTwo}
                        alt=""
                    />
                    <img
                        className="w-[260px] h-[150px] object-cover object-top rounded-xl absolute top-20 left-10 z-[3] group-hover:left-[115px] group-hover:top-7 group-hover:rotate-[15deg] duration-500 ease-out"
                        src={imgThree}
                        alt=""
                    />
                </div>
                {/* 3D Perspective Card */}
                <div className="flex items-center justify-center w-full grouphover:w-[345px] h-[170px] group-hover:h-[130px] border-t-[2px] border-[#fdfdfdb9] bg-[#E1E3E4] rounded-2xl absolute left-0 group-hover:-left-1 right-0 mx-auto bottom-0 transition-all duration-300 z-10 perspective-card">
                    <img className="w-12 opacity-50 object-contain" src={w} alt="" />
                </div>
            </div>

            {/* Description */}
            <div className="mt-10 outfit px-6">
                <h3 className="dark:text-white text-black text-xl sm:text-2xl lg:text-3xl font-semibold">
                    <Link to={liveLink} target="_blank" className="hover:text-accent dark:hover:text-primary duration-300">{name}</Link>
                </h3>
                {technologies &&
                    <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5 mt-3">
                        {
                            technologies?.map((item, i) => (
                                <div key={i} className="">
                                    <h5 className="text-sm sm:text-base dark:text-light text-secondary capitalize">{item}</h5>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ProjectCard;