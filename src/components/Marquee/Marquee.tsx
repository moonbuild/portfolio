import styles from './Marquee.module.css';

const Marquee = () => {
  const techStack = [
    'REACT',
    'NODE.JS',
    'typescript',
    'tailwind',
    'postgresql',
    'docker',
    'kubernetes',
    'next.js',
    'python',
    'fastapi',
    'sqlalchemy',
    'pandas',
  ];

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div id="tech-stack" className={styles.techStack}>
      <div className={styles.marqueeBG} />
      <div className={`${styles.marqueeContent} scroll`}>
        {duplicatedStack.map((item, index) => (
          <div key={`${item}-${index}`} className={styles.marqueeItem}>
            <span>{item.toUpperCase()}</span>
            <span className={styles.dot}>●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
