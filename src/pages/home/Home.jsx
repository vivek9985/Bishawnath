import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";
import Experience from "../../Components/Experience/Experience";
import Ticker from "../../Components/Ticker/Ticker";
import Works from "../../Components/Works/Works";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Skills></Skills>
      <Experience></Experience>
      <Works />
      <Services></Services>
      <Ticker></Ticker>
      <Contact></Contact>
    </main>
  );
};

export default Home;
