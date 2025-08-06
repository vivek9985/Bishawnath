import { useRef } from "react";
import Bg from "../../../assets/cta-bg-light.mp4"
import PrimaryButton from './../../ui/Button/PrimaryButton';
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cta = () => {
    const ctaRef = useRef(null);
    useGSAP(() => {
        gsap.from("#cta", {
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 70%",
                end: "bottom 50%",
                scrub: true,
            },
            opacity: 0,
            y: 180,
            scale: 1.3,
            duration: 1,
            ease: "power3.out",
        });
    }, []);
    return (
        <section className="pb-20 md:pb-28 lg:pb-32 xl:pb-40" ref={ctaRef}>
            <div className="w-11/12 sm:w-9/12 md:w-[715px] lg:w-[900px] xl:w-[1200px] h-[330px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-2xl sm:rounded-3xl md:rounded-[50px] bg-stone-300 dark:bg-stone-700 overflow-hidden relative" id="cta">
                <video
                    className="w-full h-auto aspect-video hidden md:block invert-0 dark:invert"
                    loop
                    muted
                    autoPlay
                >
                    <source
                        src={Bg}
                        type="video/mp4"
                    />
                </video>
                <div className="w-full h-full px-4 md:px-5 lg:px-0 absolute left-0 top-0 bg-white/20 dark:bg-[#0000008b] flex items-center justify-center">
                    <div className="text-black dark:text-white text-center outfit">
                        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[120%]">
                            Ready to <span className="lobster text-accent dark:text-primary">Supercharge</span>
                            <br />
                            Your web application?
                        </h2>
                        <p className="text-base sm:text-base md:text-xl tracking-wide mt-3 md:mt-5 mb-8 md:mb-10">Let&apos;s Build Together</p>
                        <Link to="/contact" className="w-fit block mx-auto"><PrimaryButton text="Let's Talk" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;