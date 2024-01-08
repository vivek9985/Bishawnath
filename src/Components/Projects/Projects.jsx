import Tittle from "../Tittle/Tittle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaGithub } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import projectOneImageOne from "../../assets/project-one/one.png";
import projectOneImageTwo from "../../assets/project-one/two.png";
import projectOneImageThree from "../../assets/project-one/three.png";
import projectOneImageFour from "../../assets/project-one/four.png";
import projectOneImageFive from "../../assets/project-one/five.png";
import projectOneImageSix from "../../assets/project-one/six.png";
import projectOneImageSeven from "../../assets/project-one/seven.png";
import projectOneImageEight from "../../assets/project-one/eight.png";
import projectTwoImageOne from "../../assets/project-two/one.png";
import projectTwoImageTwo from "../../assets/project-two/two.png";
import projectTwoImageThree from "../../assets/project-two/three.png";
import projectTwoImageFour from "../../assets/project-two/four.png";
import projectThreeImageOne from "../../assets/project-three/one.png";
import projectThreeImageTwo from "../../assets/project-three/two.png";
import projectThreeImageThree from "../../assets/project-three/three.png";
import projectThreeImageFour from "../../assets/project-three/four.png";
import projectThreeImageFive from "../../assets/project-three/five.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Projects = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="w-10/12 mx-auto mt-40 pb-20">
      <div className="mx-auto flex justify-center text-center">
        <Tittle text={"Projects"}></Tittle>
        <sup className="mt-3 ml-1 dhurjati font-bold text-[14px] text-gray-600 dark:text-gray-400">
          03
        </sup>
      </div>
      <div className="mt-20">
        {/* project one */}
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
            <div className="keen-slider__slide number-slide1 overflow-hidden">
              <img className="w-full h-full" src={projectOneImageOne} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img className="w-full h-full" src={projectOneImageTwo} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectOneImageThree}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img className="w-full h-full" src={projectOneImageFour} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img className="w-full h-full" src={projectOneImageFive} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img className="w-full h-full" src={projectOneImageSix} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectOneImageSeven}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectOneImageEight}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-3">
              <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-300 dhurjati">
                Car Shop
              </h2>
              <p className="my-2 text-gray-800 dark:text-stone-400">
                Full website is responsive. Have Login authantication with email
                and password and login with google (using Firebase). Used React
                and Tailwind for forntend and Express for backend and MongoDB
                for database. Used animation on scroll (AOS). Used awesome
                toastify as for alert. User will be able to add product, view
                products by brand and add to cart page
              </p>
              <div className="flex items-center justify-start gap-3 my-5">
                <a href="https://electric-pump.surge.sh/" target="_blank">
                  <button className="flex items-center justify-center gap-2 px-3 pt-1 pb-[5px] bg-[#c8f31d71] dark:bg-[#c8f31d] rounded-full font-medium">
                    Preview
                    <AiOutlineEye className="text-lg mt-px" />
                  </button>
                </a>
                <a href="https://github.com/vivek9985/car-shop" target="_blank">
                  <button className="flex items-center justify-center gap-2 px-3 pt-1 pb-[5px] bg-[#c8f31d71] dark:bg-[#c8f31d] rounded-full font-medium">
                    Code
                    <FaGithub className="text-base"></FaGithub>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project two */}
        <div
          data-aos="flip-right"
          data-aos-duration="1300"
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20"
        >
          <div className="flex items-center justify-start gap-3 my-5">
            <div className="pl-3 text-right order-last lg:order-first">
              <h2 className="text-4xl font-medium mt-2 text-gray-800 dark:text-gray-300 dhurjati">
                Hotel Booking
              </h2>
              <p className="my-2 text-gray-800 dark:text-stone-400">
                All device compitable (responsive). Have Login authantication
                with email and password and login with google (using Firebase).
                Used React and Tailwind for forntend and Express for backend and
                MongoDB for database. Used animation on scroll (AOS). Used
                react-hot-toast as for alert.
              </p>
              <div className="flex items-center justify-end gap-3 my-5">
                <a
                  href="https://relaxly-modern-hotel.surge.sh/"
                  target="_blank"
                >
                  <button className="flex items-center justify-center gap-2 px-3 pt-1 pb-[5px] bg-[#c8f31d71] dark:bg-[#c8f31d] rounded-full font-medium">
                    Preview
                    <AiOutlineEye className="text-lg mt-px" />
                  </button>
                </a>
                <a
                  href="https://github.com/vivek9985/hotel-booking-client"
                  target="_blank"
                >
                  <button className="flex items-center justify-center gap-2 px-3 pt-1 pb-[5px] bg-[#c8f31d71] dark:bg-[#c8f31d] rounded-full font-medium">
                    Code
                    <FaGithub className="text-base"></FaGithub>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="keen-slider order-first lg:order-last rounded-2xl overflow-hidden"
          >
            <div className="keen-slider__slide number-slide1 overflow-hidden">
              <img className="w-full h-full" src={projectTwoImageOne} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img className="w-full h-full" src={projectTwoImageTwo} alt="" />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectTwoImageThree}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img className="w-full h-full" src={projectTwoImageFour} alt="" />
            </div>
          </div>
        </div>
        {/* project three */}
        <div
          data-aos="flip-left"
          data-aos-duration="1400"
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20"
        >
          <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
            <div className="keen-slider__slide number-slide1 overflow-hidden">
              <img
                className="w-full h-full"
                src={projectThreeImageOne}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectThreeImageTwo}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectThreeImageThree}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectThreeImageFour}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full"
                src={projectThreeImageFive}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-3">
              <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-300 dhurjati">
                Gadget World
              </h2>
              <p className="my-2 text-gray-800 dark:text-stone-400">
                User can add product , update product, delete his/her own
                product, also can upvote and report product. Moderator can
                accept product delete product marks product as featured. Admin
                can manage user like make someone moderator or admin and anylize
                the product quantity, review quantity and user quantity . All
                device compitable (responsive).
              </p>
              <div className="flex items-center justify-start gap-3 my-5">
                <a href="https://gadget-world-2023.surge.sh/" target="_blank">
                  <button className="flex items-center justify-center gap-2 px-3 pt-1 pb-[5px] bg-[#c8f31d71] dark:bg-[#c8f31d] rounded-full font-medium">
                    Preview
                    <AiOutlineEye className="text-lg mt-px" />
                  </button>
                </a>
                <a
                  href="https://github.com/vivek9985/gadget-world-client"
                  target="_blank"
                >
                  <button className="flex items-center justify-center gap-2 px-3 pt-1 pb-[5px] bg-[#c8f31d71] dark:bg-[#c8f31d] rounded-full font-medium">
                    Code
                    <FaGithub className="text-base"></FaGithub>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
