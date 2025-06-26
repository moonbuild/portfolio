import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

import './navbar.css';

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
      <a href="#hero" className="navbar-title">
        / MP
      </a>
      <button
        className="hamburger"
        type="button"
        aria-label="Toggle Navigation menu"
        onClick={toggleOpen}
      >
        <MenuIcon size={20} />
      </button>
      <div className={`navbar-items ${isOpen ? 'show' : ''}`}>
        <a href="#about" className="navbar-item" onClick={handleClose}>
          About
        </a>
        <a href="#education" className="navbar-item" onClick={handleClose}>
          Education
        </a>
        <a href="#projects" className="navbar-item" onClick={handleClose}>
          Projects
        </a>
        <a href="#experience" className="navbar-item" onClick={handleClose}>
          Experience
        </a>
        <a href="#skills" className="navbar-item" onClick={handleClose}>
          Skills
        </a>
        <a href="#contact" className="navbar-item" onClick={handleClose}>
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
