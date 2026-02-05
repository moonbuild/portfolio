'use client';
import Navbar from '@/components/sections/Navbar/Navbar';
import styles from './page.module.css';
import Hero from '@/components/sections/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import Projects from '@/components/sections/Projects/Projects';
import Experience from '@/components/sections/Experience/Experience';
import About from '@/components/sections/About/About';
import ContactMe from '@/components/sections/ContactMe/ContactMe';
import Footer from '@/components/sections/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      <div className={styles.scanlines} />
      <Navbar />
      <div className={styles.pageContent}>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <About />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
