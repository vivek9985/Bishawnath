import gsap from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const handleMouseEnter = () => {
            gsap.to(".cursor", { scale: 1 });
        };
        const handleMouseLeave = () => {
            gsap.to(".cursor", { scale: 0 });
        };
        const handleMouseMove = (event) => {
            gsap.to("#cursor", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.3,
            });
            gsap.to("#cursor2", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.4,
            });
            gsap.to("#cursor3", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.5,
            });
            gsap.to("#cursor4", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.6,
            });
            gsap.to("#cursor5", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.7,
            });
            gsap.to("#cursor6", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.8,
            });
            gsap.to("#cursor7", {
                x: event.clientX,
                y: event.clientY,
                ease: "power3.out",
                duration: 0.9,
            });
        };
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className="cursor-container">
            <div
                id="cursor"
                className="w-1.5 h-1.5 rounded-full dark:bg-white bg-black fixed ml-0.5 mt-0.5 cursor z-[99]"
            ></div>
            <div
                id="cursor2"
                className="w-2 h-2 rounded-full dark:bg-black bg-white fixed ml-0.5 mt-0.5 cursor z-[88]"
            ></div>
            <div
                id="cursor3"
                className="w-3 h-3 rounded-full dark:bg-white bg-black fixed ml-0.5 mt-0.5 cursor z-[77]"
            ></div>
            <div
                id="cursor4"
                className="w-4 h-4 rounded-full dark:bg-black bg-white fixed ml-0.5 mt-0.5 cursor z-[66]"
            ></div>
            <div
                id="cursor5"
                className="w-5 h-5 rounded-full dark:bg-white bg-black fixed ml-0.5 mt-0.5 cursor z-[55]"
            ></div>
            <div
                id="cursor6"
                className="w-6 h-6 rounded-full dark:bg-black bg-white fixed ml-0.5 mt-0.5 cursor z-[44]"
            ></div>
            <div
                id="cursor7"
                className="w-7 h-7 rounded-full dark:bg-white bg-black fixed ml-0.5 mt-0.5 cursor z-[33]"
            ></div>
        </div>
    )
}
export default CustomCursor;