/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// components/SplitText.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const SplitText = ({
    text = "Hello, I'm animated!",
    type = "chars", // "words", "lines", or "chars"
    className = "",
    animation = {
        y: 100,
        opacity: 0,
        delay: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
    },
}) => {
    const textRef = useRef();
    useEffect(() => {
        const split = new SplitType(textRef.current, { types: type });
        const tl = gsap.timeline()
        tl.from(split[type], animation);
        return () => {
            split.revert();
        };
    }, []);

    return (
        <h2 ref={textRef} className={className}>
            {text}
        </h2>
    );
};

export default SplitText;
