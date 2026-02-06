import { Github } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.statusBar}>
          <div className={styles.statusBadge}>v2.01.SYS_READY</div>
          <div className={styles.statusLiveIndicator}>
            <span className={`${styles.statusDot} pulse`}>●</span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        <div className={styles.title}>
          FULL
          <br />
          <span className={styles.titleOutline}>STACK</span>
          <br />
          DEV_
        </div>

        <span className={styles.description}>
          I craft digital chaos into structured systems. I build systematic, pixel accurate... well
          you get the point.
        </span>
        <div className={styles.actions}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            View Projects
          </a>
          <a
            href="https://github.com/moonbuild"
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.btnOutlined}`}
          >
            <Github />
            Github
          </a>
        </div>
      </div>
      <div className={styles.codeGraphicWrapper}>
        <div className={styles.codeCard}>
          <div className={styles.codeCardInner}>
            <code>
              function init(){'{'}
              <br />
              &nbsp;&nbsp;const skill=100;
              <br />
              &nbsp;&nbsp;const coffee=20;
              <br />
              &nbsp;&nbsp;return chaos;
              <br />
              {'}'}
            </code>
          </div>
          <div className={styles.codeCardBG} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
