import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";
import Experience from "../../Components/Experience/Experience";
import Ticker from "../../Components/Ticker/Ticker";
// import Works from "../../Components/Works/Works";
import Pricing from "../../Components/Pricing/Pricing";
// import ServiceTicker from "../../Components/Ticker/ServiceTicker";
import RecentWorks from "../../Components/RecentWorks/RecentWorks";

const Home = () => {
  return (
    <main>
      <Banner />
      <Skills />
      <Experience />
      {/* <Works /> */}
      <RecentWorks />
      <Services />
      <Ticker />
      {/* <ServiceTicker /> */}
      <Pricing />
      <Contact></Contact>
    </main>
  );
};

export default Home;
