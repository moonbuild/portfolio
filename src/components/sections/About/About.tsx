import { Cpu, Database, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
import ResumeActions from '@/components/ResumeActions';

import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={`${styles.about} `}>
      <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.header}`}>
          <span className={`${styles.special}`}>WHO</span> AM I?
        </div>
        <div className={styles.info}>
          <div className={styles.description}>
            Hey I am <span style={{ color: 'var(--neon-purple)' }}>Mourya</span>. I am proficient in
            arguing with computers.
          </div>
          <div className={styles.description}>
            I am someone who gets easily sidetracked with small imperfections, but that is how i
            have developed a strong foundation. Now I spend my days orchestrating databases and
            working in open source projects.
          </div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <Database color="var(--neon-purple)" size={20} />
            <span className={styles.logoText}>SQL</span>
          </div>
          <div className={styles.logo}>
            <Zap color="var(--neon-green)" size={20} />
            <span className={styles.logoText}>SPEED</span>
          </div>
          <div className={styles.logo}>
            <Globe color="var(--neon-pink)" size={20} />
            <span className={styles.logoText}>WEB</span>
          </div>
          <div className={styles.logo}>
            <Cpu color="var(--text-white)" size={20} />
            <span className={styles.logoText}>ARCH</span>
          </div>
        </div>
        <ResumeActions />
      </div>
      <div className={`${styles.imageContainer}`}>
        <Image alt="Developer Photo @Me" src={'/about/photo.png'} className={styles.image} fill />
      </div>
    </section>
  );
};
export default About;
