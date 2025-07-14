import { useRef, useState } from "react";
import { gsap } from "gsap";
import MessageIcon from "../../assets/front/premium.png";
import MessageIconDark from "../../assets/front/gradient.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";


const Message = () => {
    const hiRef = useRef(null);
    const helpRef = useRef(null);
    const wRef = useRef(null);
    const mRef = useRef(null);
    const [shown, setShown] = useState(false);

    const handleClick = () => {
        setShown(!shown)
        if (!shown) {
            gsap.to(
                hiRef.current,
                { scale: 0 },
            );
            gsap.to(
                helpRef.current,
                { scale: 0 },
            );
            gsap.to(
                wRef.current,
                { scale: 1 },
            );
            gsap.to(
                mRef.current,
                { scale: 1 },
            );
        } else {
            gsap.to(
                hiRef.current,
                { scale: 1 },
            );
            gsap.to(
                helpRef.current,
                { scale: 1 },
            );
            gsap.to(
                wRef.current,
                { scale: 0 },
            );
            gsap.to(
                mRef.current,
                { scale: 0 },
            );
        }
    };

    return (
        <div
            onClick={handleClick}
            className="w-12 h-12 rounded-full flex items-center justify-center dark:bg-primary bg-purple-500 cursor-pointer fixed right-10 bottom-10 z-50"
        >
            <div className="w-full h-full relative flex items-center justify-center">
                <img className="w-8 block dark:hidden" src={MessageIcon} alt="Message Icon" />
                <img className="w-8 hidden dark:block" src={MessageIconDark} alt="Message Icon" />
                <div
                    ref={helpRef}
                    className="w-[100px] bg-purple-500 dark:bg-primary rounded-full px-3 py-2 text-white dark:text-black outfit font-medium absolute -top-[98px] right-0"
                >
                    Hi there !
                </div>
                <div
                    ref={hiRef}
                    className="w-[170px] bg-purple-500 dark:bg-primary rounded-full px-3 py-2 text-white dark:text-black outfit font-medium absolute -top-12 right-0"
                >
                    How can I help you ?
                </div>
                <div
                    ref={wRef}
                    className="scale-0 w-12 h-12 flex items-center justify-center bg-purple-500 dark:bg-primary rounded-full text-white dark:text-black outfit font-medium absolute top-0 right-[55px]"
                >
                    <FaWhatsapp size={20} />
                </div>
                <div
                    ref={mRef}
                    className="scale-0 w-12 h-12 flex items-center justify-center bg-purple-500 dark:bg-primary rounded-full text-white dark:text-black outfit font-medium absolute top-0 right-[110px]"
                >
                    <FaFacebookMessenger size={20} />
                </div>
            </div>
        </div>
    );
};

export default Message;
