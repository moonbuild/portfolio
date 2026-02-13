import ResumeActions from '@/components/ResumeActions';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.statusBar}>
          <div className={styles.statusBadge}>v2.02.SYS_READY</div>
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
          <ResumeActions />
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
