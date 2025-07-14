import { useRef, useState } from "react";
import { gsap } from "gsap";
import MessageIcon from "../../assets/front/premium.png";
import MessageIconDark from "../../assets/front/gradient.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { useGSAP } from "@gsap/react";


const Message = () => {
    const messageRef = useRef(null);
    const hiRef = useRef(null);
    const helpRef = useRef(null);
    const wRef = useRef(null);
    const mRef = useRef(null);
    const [shown, setShown] = useState(false);

    useGSAP(() => {
        gsap.from(
            messageRef.current,
            { x: 200, opacity: 0, duration: 0.6, delay: 4, ease: "power4.inOut" },
        );
    })

    const handleClick = () => {
        setShown(!shown)
        if (!shown) {
            gsap.to(
                hiRef.current,
                { scaleY: 0, x: -50, opacity: 0 },
            );
            gsap.to(
                helpRef.current,
                { scaleY: 0, x: -50, opacity: 0, delay: 0.2 },
            );
            gsap.to(
                wRef.current,
                { scale: 1, delay: 0.3 },
            );
            gsap.to(
                mRef.current,
                { scale: 1, delay: 0.5 },
            );
        } else {
            gsap.to(
                hiRef.current,
                { scaleY: 1, x: 0, opacity: 1, delay: 0.3 },
            );
            gsap.to(
                helpRef.current,
                { scaleY: 1, x: 0, opacity: 1, delay: 0.4 },
            );
            gsap.to(
                wRef.current,
                { scale: 0, delay: 0.2 },
            );
            gsap.to(
                mRef.current,
                { scale: 0, delay: 0.1 },
            );
        }
    };

    return (
        <div
            onClick={handleClick}
            ref={messageRef}
            className="w-11 h-11 rounded-full flex items-center justify-center dark:bg-primary bg-purple-500 cursor-pointer fixed right-10 bottom-10 z-50"
        >
            <div className="w-full h-full relative flex items-center justify-center">
                <img className="w-8 block dark:hidden" src={MessageIcon} alt="Message Icon" />
                <img className="w-8 hidden dark:block" src={MessageIconDark} alt="Message Icon" />
                <div
                    ref={helpRef}
                    className="w-[100px] bg-purple-500 dark:bg-primary rounded-full px-3 py-1.5 text-white dark:text-black outfit font-medium absolute -top-[95px] right-0"
                >
                    Hi there !
                </div>
                <div
                    ref={hiRef}
                    className="w-[170px] bg-purple-500 dark:bg-primary rounded-full px-3 py-1.5 text-white dark:text-black outfit font-medium absolute -top-12 right-0"
                >
                    How can I help you ?
                </div>
                <div
                    ref={wRef}
                    className="scale-0 w-11 h-11 flex items-center justify-center bg-purple-500 dark:bg-primary rounded-full text-white dark:text-black outfit font-medium absolute top-[-55px] right-0"
                >
                    <FaWhatsapp size={20} />
                </div>
                <div
                    ref={mRef}
                    className="scale-0 w-11 h-11 flex items-center justify-center bg-purple-500 dark:bg-primary rounded-full text-white dark:text-black outfit font-medium absolute top-[-110px] right-0"
                >
                    <FaFacebookMessenger size={20} />
                </div>
            </div>
        </div>
    );
};

export default Message;
