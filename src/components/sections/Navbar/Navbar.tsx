import { Terminal } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navItems = [
    { name: 'PROJECTS', id: 'projects', className: 'hoverPurple' },
    { name: 'HISTORY_LOG', id: 'experience', className: 'hoverGreen' },
    { name: 'ABOUT', id: 'about', className: 'hoverPink' },
  ];
  const handleScroll = (id: string) => {
    document.getElementById(id);
  };

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.inner}>
        <div className={styles.group}>
          <a href="#" className={styles.logo}>
            <Terminal color="var(--neon-green)" size={28} />
            MP_DEV<span style={{ color: 'var(--neon-pink)' }}>.</span>
          </a>
        </div>

        {/* nav items */}
        <div className={styles.navigationItems}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleScroll(item.id)}
              className={`${styles.navLink} ${styles[item.className]}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* scroll to contact me page */}
        <div className={styles.hireMeWrapper}>
          <a
            href="#contact-me"
            onClick={() => handleScroll('contact')}
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
