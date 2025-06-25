import { useEffect, useRef, useState } from "react";
import PricingCard from "../../Cards/PricingCard";
import Tittle from "../../Tittle/Tittle";
import gsap from "gsap";

const Pricing = () => {
    const [active, setActive] = useState(false);
    const indicatorRef = useRef(null);
    const cardGroupRef = useRef(null);

    useEffect(() => {
        gsap.to(indicatorRef.current, {
            x: active ? "100%" : "0%",
            duration: 1,
            ease: "elastic.out(1, 0.5)",
        });

        gsap.fromTo(
            cardGroupRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
            }
        );
    }, [active]);

    return (
        <div className="max-w-[1600px] mx-auto mt-40 pb-20">
            <div className="mx-auto flex justify-center items-center text-center">
                <Tittle text={"Pricing Plan"} />
            </div>

            {/* Tabs */}
            <div className="bg-[#272626] w-[210px] h-12 mx-auto rounded-full relative flex items-center justify-center mt-10">
                <div className="flex items-center w-[200px] h-10 rounded-full outfit relative text-stone-400 overflow-hidden">
                    <button
                        className="w-1/2 text-center h-full rounded-full relative z-10"
                        onClick={() => setActive(false)}
                    >
                        <span className={`leading-[100%] ${!active ? "text-black dark:text-white" : ""}`}>
                            Frontend
                        </span>
                    </button>
                    <button
                        className="w-1/2 text-center h-full rounded-full relative z-10"
                        onClick={() => setActive(true)}
                    >
                        <span className={`leading-[100%] ${active ? "text-black dark:text-white" : ""}`}>
                            Mern
                        </span>
                    </button>
                    <div
                        ref={indicatorRef}
                        className="absolute left-0 bg-white dark:bg-black w-1/2 h-full rounded-full"
                    ></div>
                </div>
                <div className="bg-accent dark:bg-primary rounded-full pt-1 pb-[3px] px-2 text-white dark:text-black leading-[100%] text-xs outfit font-medium text-center absolute -left-1.5 -top-2">
                    -20%
                </div>
            </div>

            {/* Cards */}
            <div
                key={active ? "mern" : "frontend"}
                ref={cardGroupRef}
                className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-5 lg:gap-0 items-center lg:items-end justify-center mt-10"
            >
                {!active ?
                    <>
                        <PricingCard variant="fronEnd" type="basic" price={25} className="lg:translate-x-3" />
                        <PricingCard variant="fronEnd" type="medium" price={50} className="z-10 pt-0" />
                        <PricingCard variant="fronEnd" type="premium" price={100} className="lg:-translate-x-3" />
                    </>
                    :
                    <>
                        <PricingCard variant="mern" type="basic" price={200} className="lg:translate-x-3" />
                        <PricingCard variant="mern" type="medium" price={500} className="z-10 pt-0" />
                        <PricingCard variant="mern" type="premium" price={1000} className="z-10 pt-0" />
                    </>
                }
            </div>
        </div>
    );
};

export default Pricing;
