import Ticker from "../../Components/Widget/Ticker/Ticker";
import Hero from "../../Components/Section/Home/Hero";
import Skills from './../../Components/Section/Shared/Skills';
import Experience from './../../Components/Section/Home/Experience';
// import Works from './../../Components/Section/Home/Works';
import RecentWorks from "../../Components/Section/Home/RecentWorks";
import Services from './../../Components/Section/Home/Services';
import Pricing from './../../Components/Section/Home/Pricing';
import Faq from "../../Components/Section/Shared/Faq";

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      {/* <Works /> */}
      <RecentWorks />
      <Services />
      <Ticker />
      <Pricing />
      <Faq />
    </main>
  );
};

export default Home;
