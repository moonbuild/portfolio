import { MenuIcon } from "lucide-react";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar" id="navbar">
      <span className="navbar-title">/ MP</span>
      <button className="hamburger" onClick={toggleOpen}>
        <MenuIcon size={20} />
      </button>
      <div className={`navbar-items ${isOpen ? "show" : ""}`}>
        <a href="about" className="navbar-item" onClick={handleClose}>
          About
        </a>
        <a href="Education" className="navbar-item" onClick={handleClose}>
          Education
        </a>
        <a href="Projects" className="navbar-item" onClick={handleClose}>
          Projects
        </a>
        <a href="Experience" className="navbar-item" onClick={handleClose}>
          Experience
        </a>
        <a href="Skills" className="navbar-item" onClick={handleClose}>
          Skills
        </a>
        <a href="Contact" className="navbar-item" onClick={handleClose}>
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
