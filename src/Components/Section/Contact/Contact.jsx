import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Tittle from "../../Tittle/Tittle";
import { Player } from "@lottiefiles/react-lottie-player";
import "aos/dist/aos.css";
import Aos from "aos";
import { toast } from "sonner";
import PrimaryButton from "../../ui/Button/PrimaryButton";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const fm = e.target;
    const name = fm.user_name.value;
    const email = fm.user_email.value;
    const message = fm.message.value;
    if (name === "") {
      toast.error("Please provide your name !", {
        action: {
          label: <p className="pb-0.5">Close</p>,
          onClick: () => console.log("Close"),
        },
      });
    } else if (email === "") {
      toast.error("Please provide your email !");
    } else if (message === "") {
      toast.error("Please provide a message !");
    } else {
      emailjs
        .sendForm(
          "service_d71oxtf",
          "template_scwcr8w",
          form.current,
          "NzzBjaRH7dprK9I-O"
        )
        .then(
          (result) => {
            if (result?.status === 200) {
              toast.success("Message send!", {
                icon: (
                  <Player
                    className="w-[23px] h-[23px]"
                    autoplay
                    loop
                    src="https://lottie.host/9ee48063-34ab-410d-abf7-03ed6ba77055/mRKOUGnTAM.json"
                  ></Player>
                ),
              });
              fm.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="max-w-[1600px] mx-auto pt-10 pb-20">
      <Tittle text={"get in touch"}></Tittle>
      <div className="mt-1.5 mb-8 md:mb-2 overflow-hidden">
        <p
          data-aos="fade-up"
          data-aos-duration="1400"
          className="text-center font-medium dark:text-stone-200 outfit"
        >
          Feel free to contact me
        </p>
      </div>
      <div className="w-10/12 mx-auto grid md:grid-cols-2">
        <div
          className="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <Player
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] grayscale dark:grayscale-0 filter dark:hue-rotate-[-70deg]"
            autoplay
            loop
            src="https://lottie.host/53ddedbd-c62b-441d-95c2-09f0d6d435a1/eLRmeSaTl2.json"
          ></Player>
        </div>
        <form
          className="p-2 md:p-10 text-gray-800 dark:text-stone-200"
          ref={form}
          onSubmit={sendEmail}
        >
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="relative mb-8 group"
          >
            <label>Name</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="text"
              placeholder="Your name"
              // required
              name="user_name"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1300"
            className="relative mb-8 group"
          >
            <label>Email</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="email"
              placeholder="Your email"
              // required
              name="user_email"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1600"
            className="relative mb-8 group"
          >
            <label>Message</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              placeholder="Message here . . ."
              // required
              name="message"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <PrimaryButton text="Send Message" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
