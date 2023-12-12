import Tittle from "../../Components/Tittle/Tittle";
import vivek from "../../assets/vivekfull.png";

const About = () => {
  return (
    <section className="w-10/12 mx-auto mb-40">
      <div className="mt-20">
        <Tittle text={"about me"}></Tittle>
      </div>
      <div className="w-[200px] mx-auto bg-purple-400 rounded-full overflow-hidden mt-12 outline-4 outline-offset-2 outline-dotted outline-purple-400">
        <img className="w-full h-full" src={vivek} alt="viek" />
      </div>
      <h2 className="text-center text-4xl dhurjati text-gray-800 dark:text-stone-300 mt-8">
        Vivek Anando
      </h2>
      <h2 className="text-center text-xl tracking-wide lobster text-gray-600 dark:text-stone-300 mt-2">
        A Creative Front-end Developer
      </h2>
      <p className="w-6/12 mx-auto mt-4 text-gray-400 dark:text-stone-400 text-center">
        I'm a front end web developer who is passionate about making error free
        website with client satisfaction.I love to solve real-world problems.I
        am strategic, goal oriented and always work with an end goal in mind.My focus is on  clean design, micro animations, transitions and interaction.
      </p>
    </section>
  );
};

export default About;
