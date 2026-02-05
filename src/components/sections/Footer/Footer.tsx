import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>MP_DEV</div>
        <div className={styles.description}>~ Always in Chaos</div>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://github.com/moonbuild" target="_blank">
          <Github color="var(--text-white)" size={24} />
        </a>
        <a href="">
          <Linkedin color="var(--text-white)" size={24} />
        </a>
        <a href="mailto:mouryapranay20@gmail.com">
          <Mail color="var(--text-white)" size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
