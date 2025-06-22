import './about.css';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-text__container">
        <div className="about-title">
          <span className="heading-number">I.</span>
          <span className="heading-title">About Me</span>
        </div>
        <div className="about-bio">
          <span className="about-para">
            Hello, I am Mourya, a software engineer in Hyderabad, India. I enjoy building tech that
            actually help people, whether its making everyday tasks easier, helping businesses make
            smarter decisions. I am especially drawn to projects that make an impact to the world
            around us, I enjoy exploring how technology can make life simpler and smarter.
          </span>
          <span className="about-para">
            While studying at <span className="base-green-text">ICFAI Tech, Hyderabad</span> I've
            also completed several internships where I worked on real world features and tackled
            everyday engineering challenges. These experiences helped me grow into a professional
            developer who values clean code, follows best practices and builds scalable
            applications.
          </span>
        </div>
      </div>
      <div className="about-image-frame">
        <div className="about-img__glow" />
        <img src="about/photo.jpg" className="about-img" alt="About Me" />
      </div>
    </section>
  );
};
export default About;
