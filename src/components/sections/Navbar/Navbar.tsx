import { Menu, Terminal, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { useOverlay } from '@/context/OverlayContext';

const Navbar = () => {
  const { showOverlay, hideOverlay } = useOverlay();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'PROJECTS', id: 'projects', className: 'hoverPurple' },
    { name: 'HISTORY_LOG', id: 'experience', className: 'hoverGreen' },
    { name: 'ABOUT', id: 'about', className: 'hoverPink' },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleNavItemClick = (id: string) => {
    // scroll to section(#id) and close nav menu.
    document.getElementById(id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      showOverlay();
    } else {
      hideOverlay();
    }
    return () => hideOverlay();
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.group}>
          <a href="#" className={styles.logo}>
            <Terminal color="var(--neon-green)" size={28} />
            MP_DEV<span style={{ color: 'var(--neon-pink)' }}>.</span>
          </a>
        </div>
        {/* Menu (only visible in mobile -> check CSS) */}
        <button className={styles.hamBurger} onClick={toggleMenu}>
          {isOpen ? (
            <X size={32} color="var(--neon-pink)" />
          ) : (
            <Menu size={32} color="var(--neon-green)" />
          )}
        </button>

        {/* nav items */}
        <div className={`${styles.navigationItems} ${isOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavItemClick(item.id)}
              className={`${styles.navLink} ${styles[item.className]}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`#contact-me`}
            onClick={() => handleNavItemClick('contact-me')}
            className={`${styles.navLink} ${styles.navHidden}`}
          >
            HIRE_ME{'()'}
          </a>
        </div>

        {/* scroll to contact me page */}
        <div className={styles.hireMeWrapper}>
          <a
            href="#contact-me"
            onClick={() => handleNavItemClick('contact')}
            className={styles.hireMeBtn}
          >
            <span className={styles.hireMeText}>HIRE_ME()</span>
            <div className={styles.hireMeBtnBg} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
