import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tittle from "../../Tittle/Tittle";
import ReviewerImageOne from "../../../assets/reviewer-1.webp";
import ReviewerImageTwo from "../../../assets/reviewer-2.webp";
import ReviewerImageThree from "../../../assets/reviewer-3.webp";
import ReviewerImageFour from "../../../assets/reviewer-4.webp";
import { RiDoubleQuotesL } from "react-icons/ri";
import Marquee from "react-fast-marquee";


const testimonialData = [
    {
        reviewer_name: "Sarah Johnson",
        reviewer_role: "CEO, BrightTech",
        reviewer_image: ReviewerImageOne,
        reviewer_text:
            "Bishawnath's expertise in MERN stack development transformed our idea into a high-performing, scalable application. His attention to detail and commitment to deadlines was truly impressive.",
    },
    {
        reviewer_name: "Michael Lee",
        reviewer_role: "CTO, InnovateX",
        reviewer_image: ReviewerImageTwo,
        reviewer_text:
            "Working with Bishawnath was a pleasure. He’s a problem-solver who brings both technical skill and creative thinking to every project. Highly recommended for full-stack solutions.",
    },
    {
        reviewer_name: "Priya Sharma",
        reviewer_role: "Product Manager, CloudWave",
        reviewer_image: ReviewerImageThree,
        reviewer_text:
            "Bishawnath’s deep understanding of React, Node.js, and MongoDB made our product development smooth and efficient. His communication skills made collaboration effortless.",
    },
    {
        reviewer_name: "David Kim",
        reviewer_role: "Founder, AppForge",
        reviewer_image: ReviewerImageFour,
        reviewer_text:
            "From start to finish, Bishawnath exceeded expectations. His MERN stack skills are top-tier, and he delivered a fast, scalable, and visually stunning application for our business.",
    },
];



const Testimonial = () => {
    useEffect(() => {
        Aos.init({}); //once: true
    }, []);

    return (
        <section className="max-w-[1300px] w-11/12 pt-20 pb-10 mx-auto">
            <Tittle text="Testimonial" />
            <div className="mt-14 relative">
                <Marquee>
                    <div className="flex items-stretch">
                        {testimonialData.map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="w-[450px] mr-4 bg-white dark:bg-black/20 border-[#F8F8F8] dark:border-[#1d1d1d] border-[6px] p-8 rounded-3xl relative transition-all duration-500"
                            >
                                <div className="flex items-center justify-start gap-3">
                                    <div className="bg-black flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
                                        <img className="w-full h-full object-cover object-top" src={item?.reviewer_image} alt="" />
                                    </div>
                                    <div className="flex flex-col items-start gap-0">
                                        <h3 className="text-lg font-semibold text-black dark:text-white">
                                            {item?.reviewer_name}
                                        </h3>
                                        <p className="text-stone-400 dark:text-stone-400">
                                            {item?.reviewer_role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-stone-400 dark:text-stone-400 mt-4">
                                    {item?.reviewer_text}
                                </p>
                                <RiDoubleQuotesL className="text-black/10 dark:text-white/10 text-5xl absolute top-2 right-3" />
                            </div>
                        ))}
                    </div>
                </Marquee>
                {/* in dark mode  */}
                <div className="hidden dark:block w-52 h-[105%] bg-gradient-to-r from-secondary to-transparent absolute left-[-5px] top-0 bottom-0 my-auto z-10"></div>
                <div className="hidden dark:block w-52 h-[105%] bg-gradient-to-r from-transparent to-secondary absolute right-[-5px] top-0 bottom-0 my-auto z-10"></div>
                {/* in light mode */}
                <div className="block dark:hidden w-52 h-[105%] bg-gradient-to-r from-light to-transparent absolute left-[-5px] top-0 bottom-0 my-auto z-10"></div>
                <div className="block dark:hidden w-52 h-[105%] bg-gradient-to-r from-transparent to-light absolute right-[-5px] top-0 bottom-0 my-auto z-10"></div>
            </div>
        </section >
    );
};

export default Testimonial;
