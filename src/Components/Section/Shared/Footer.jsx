import moment from "moment";
import { useEffect, useState } from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: <FaGithub />, slug: "https://github.com/", className: "left-6 top-3" },
  { icon: <FaLinkedinIn />, slug: "https://www.linkedin.com/", className: "top-10 -left-4" },
  { icon: <FaDribbble />, slug: "https://dribbble.com/", className: "-left-7 top-0 bottom-0 my-auto" },
  { icon: <FaBehance />, slug: "https://www.behance.net/", className: "bottom-10 -left-4" },
  { icon: <FaFacebookF />, slug: "https://www.facebook.com/", className: "bottom-3 left-6" },
];
// const socialIcons = [
//   { icon: <FaGithub />, slug: "https://github.com/vivek9985", className: "left-6 top-3" },
//   { icon: <FaLinkedinIn />, slug: "https://www.linkedin.com/in/bishawnath/", className: "top-10 -left-4" },
//   { icon: <FaDribbble />, slug: "https://dribbble.com/bishawnath-bormon", className: "-left-7 top-0 bottom-0 my-auto" },
//   { icon: <FaBehance />, slug: "https://www.behance.net/bishawnbormon", className: "bottom-10 -left-4" },
//   { icon: <FaFacebookF />, slug: "https://www.facebook.com/vivek.anando.9985", className: "bottom-3 left-6" },
// ];

const Footer = () => {
  const [time, setTime] = useState(moment().format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full bg-primary dark:bg-[#1d1d1d] pb-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-5 pt-10 md:pt-20 pb-10 md:pb-16">
          <div>
            <h2 className="uppercase outfit text-xl dark:text-stone-300">
              Local Time
            </h2>
            <h2 className="mt-2 font-medium tracking-wide text-gray-500 dark:text-[#a9e943] lobster">
              {time}
            </h2>
          </div>
          {/* <div className="hidden md:flex items-end justify-center">
            <p className="text-gray-500 text-sm text-center">
              © Copyright-All Rights Reserved by <span className="text-gray-800 font-medium dark:text-gray-500">Bishawnath</span>
            </p>
          </div> */}
          <div>
            <h2 className="uppercase outfit text-xl dark:text-stone-300 md:text-right">
              Socials
            </h2>
            <ul className="flex items-center md:justify-end gap-2 mt-2 text-gray-500 font-medium dark:text-[#a9e943] text-sm">
              {socialIcons?.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item?.slug}
                    target="_blank"
                    className="w-10 h-10 rounded-full text-white hover:text-black bg-black hover:bg-white dark:bg-primary dark:text-black dark:hover:bg-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  >
                    {item?.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:hidden items-center justify-center mt-7">
            <p className="text-gray-500 dark:text-stone-400 text-sm text-center">
              © Copyright-All Rights Reserved by <span className="text-gray-800 font-medium dark:text-gray-500">Bishawnath</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
