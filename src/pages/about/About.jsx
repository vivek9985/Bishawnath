import Cta from "../../Components/Section/Shared/Cta";
import Tittle from "../../Components/Tittle/Tittle";
import Socials from "../../Components/Widget/Socials";
import vivek from "../../assets/vivek.png";

const About = () => {
  return (
    <main>
      <section className="w-10/12 mx-auto mb-14 md:mb-20 lg:mb-28 xl:mb-32 mt-10 xl:mt-28">
        <Socials />
        <div>
          <Tittle text={"about me"}></Tittle>
        </div>
        <div className="w-[200px] mx-auto bg-secondary dark:bg-primary rounded-full overflow-hidden mt-8 md:mt-12 outline-4 outline-offset-2 outline-dotted outline-secondary dark:outline-primary">
          <img className="w-full h-full" src={vivek} alt="viek" />
        </div>
        <h2 className="text-center text-3xl dhurjati text-gray-800 dark:text-stone-300 mt-8">
          Bishawnath Chandra
        </h2>
        <h2 className="text-center text-lg tracking-wide lobster text-gray-600 dark:text-stone-300 mt-2">
          A Creative Mern Stack Developer
        </h2>
        <p className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-4 text-gray-400 dark:text-stone-400 text-center">
          I&apos;m a mern stack web developer who is passionate about making error free
          website with client satisfaction.I love to solve real-world problems.I
          am strategic, goal oriented and always work with an end goal in mind.My
          focus is on clean design, micro animations, transitions and interaction.
        </p>
      </section>
      <Cta />
    </main>
  );
};

export default About;
