import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <span className="navbar-title">/ MP</span>
      <div className="navbar-items">
        <a href="about" className="navbar-item">
          About
        </a>
        <a href="Education" className="navbar-item">
          Education
        </a>
        <a href="Projects" className="navbar-item">
          Projects
        </a>
        <a href="Skills" className="navbar-item">
          Skills
        </a>
        <a href="Experience" className="navbar-item">
          Experience
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
