import Hero from "../../Components/Section/Home/Hero";
import Skills from './../../Components/Section/Shared/Skills';
// import Experience from './../../Components/Section/Home/Experience';
// import Works from './../../Components/Section/Home/Works';
import Services from './../../Components/Section/Home/Services';
import RecentWorks from "../../Components/Section/Home/RecentWorks";
import Ticker from "../../Components/Widget/Ticker/Ticker";
import Pricing from './../../Components/Section/Home/Pricing';
import Faq from "../../Components/Section/Shared/Faq";
import Cta from "../../Components/Section/Shared/Cta";
import Testimonial from "../../Components/Section/Shared/Testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      {/* <Experience /> */}
      {/* <Works /> */}
      <Services />
      <Ticker />
      <RecentWorks />
      <Pricing />
      <Testimonial />
      <Faq />
      <Cta />
    </main>
  );
};

export default Home;
