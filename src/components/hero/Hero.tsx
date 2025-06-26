import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-title">Mourya Pranay</div>
      <div className="hero-bio">
        <div className="hero-bio-line__1">
          <span>I'm a</span>
          <div className="hero-role-animate">
            <span>Full stack developer</span>
            <span>AI Engineer</span>
            <span>Frontend developer</span>
            <span>Backend developer</span>
          </div>
        </div>
      </div>
      <div className="hero-title__sub">I engineer and deploy projects.</div>
    </section>
  );
};

export default Hero;
