import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <span className="base-green-text">Hi, my name is</span>
      <div className="hero-title">Mourya Pranay</div>
      <div className="hero-title__sub">I engineer and deploy projects.</div>
      <div className="hero-bio">
        <div className="hero-bio-line__1">
          <span>I'm a</span>
          <div className="hero-role-animate">
            <span>full stack developer</span>
            <span>frontend developer</span>
            <span>backend developer</span>
          </div>
        </div>
        <span>
          specializing in building scalable, creative digital projects.
        </span>
      </div>
    </section>
  );
};
export default Hero;
