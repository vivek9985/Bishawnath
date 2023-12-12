import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Tittle from "../Tittle/Tittle";
import { Player } from "@lottiefiles/react-lottie-player";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d71oxtf",
        "template_scwcr8w",
        form.current,
        "NzzBjaRH7dprK9I-O"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status == 200) {
            toast.success("Message Send!");
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="w-10/12 mx-auto pt-20 pb-40">
      <Tittle text={"get in touch"}></Tittle>
      <p className="text-center -mt-4 mb-8 md:mb-14 font-medium dark:text-stone-200">
        Feel free to contact me
      </p>
      <div className="grid md:grid-cols-2">
        <div className="">
          <Player
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
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
          <div className="relative mb-8 group">
            <label>Name</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="text"
              placeholder="Your name"
              required
              name="user_name"
            />
          </div>
          <div className="relative mb-8 group">
            <label>Email</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              type="email"
              placeholder="Your email"
              required
              name="user_email"
            />
          </div>
          <div className="relative mb-8 group">
            <label>Message</label>
            <div className="w-0 h-0.5 group-hover:w-full transition-all duration-1000 absolute bottom-0 bg-blue-500"></div>
            <input
              className="w-full focus:outline-none py-2 bg-transparent border-b-2 focus:border-green-500 border-gray-400"
              placeholder="Message here . . ."
              required
              name="message"
            />
          </div>
          <button
            type="submit"
            className="inline-flex relative bg-[#c9f31d] rounded-full pl-5 pr-12 py-2 text-lg font-semibold text-gray-700 dark:text-gray-900"
          >
            <h2>Send</h2>
            <Player
              className="absolute right-2 top-2"
              autoplay
              loop
              src="https://lottie.host/a0c2e8fd-3e2c-4f9b-b5de-fbd3fe271ab3/zbEiiBX8Tj.json"
              style={{ height: "30px", width: "30px" }}
            ></Player>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
