import About from "./components/about/About";
import ContactMe from "./components/contactMe/ContactMe";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

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
        {/* Skills */}
        <Skills />
        {/* Contact Me */}
        <ContactMe />
      </div>
    </div>
  );
};
export default Portfolio;
