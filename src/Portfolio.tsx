import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const Portfolio = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div className="portfolio-content">
        {/* hero-landing-page */}
        <Hero />
        {/* about page */}
        <About />
        {/* education page */}
        <Education />
        {/* projects page */}
        <Projects />
        {/* experience */}
        <Experience />
      </div>
    </div>
  );
};
export default Portfolio;
