import styles from './Experience.module.css';

const Experience = () => {
  interface JobItem {
    key: string;
    jobRole: string;
    type: string;
    companyName: string;
    durationText: string;
    achievements: string[];
  }

  const jobData: JobItem[] = [
    {
      key: 'xyenta',
      jobRole: 'Software Developer',
      type: 'Internship + Placement',
      companyName: 'Xyenta Solutions',
      durationText: 'Aug 2024 // Present',
      achievements: [
        'Built complex visual dashboards that trigger dynamic API calls based on user actions',
        'Handled multiple API integrations and redesigned 15+ pages using clean, reusable components',
        // "Migrated the UI from a standard library to vanilla CSS for better control and performance",
        "Optimized devops pipelines to cut code check times from 120 second's down to 60 seconds",
        'Used FastAPI and SQL Alchemy to build backend filters and fetch key metrics',
        'Implemented interactive charts using Recharts with custom styled Ant Design elements',
      ],
    },
    {
      key: 'kalories',
      jobRole: 'Full Stack Developer',
      type: 'Internship',
      companyName: 'Kalories',
      durationText: 'Feb 2024 // Aug 2024',
      achievements: [
        'Developed a custom AI voice agent for support using speech APIs, contributing to a 20% sales boost',
        'Improved website UI design which led to a 15% increase in user engagement',
        'Created the frontend and backend logic for the voice agent from scratch',
      ],
    },
    {
      key: 'south-central-railway',
      jobRole: 'Full Stack Developer',
      type: 'Internship',
      companyName: 'South Central Railway',
      durationText: 'June 2023 // Aug 2023',
      achievements: [
        'Led development on a backend project managing over 10,000 records with high reliability',
        'Created comprehensive server solutions and intuitive frontend interfaces from the ground up',
        'Built advanced database operations to ensure optimal performance under heavy loads',
      ],
    },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.bgOverlay}>
        <div className={styles.bgTextOverlay}>SYSTEM SYSTEM SYSTEM </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <span className={styles.highlight}>HISTORY</span> LOG
        </div>
        <div className={styles.timelineWrapper}>
          <div className={styles.timeline}>
            {jobData.map((job, index) => (
              <div
                key={job.key}
                className={`${styles.timelineItem} ${index === 0 ? styles.groupPurple : index === 1 ? styles.groupGreen : styles.groupPink}`}
              >
                <div className={styles.timelineDot} />
                <div className={styles.jobCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardHeaderLeft}>
                      <span className={styles.jobTitle}>{job.jobRole}</span>
                      <div className={styles.jobMainDataContainer}>
                        <span className={styles.companyName}>@ {job.companyName}</span>
                        <span className={styles.jobType}>
                          {'('}
                          {job.type}
                          {')'}
                        </span>
                      </div>
                    </div>
                    <div className={styles.durationBadge}>{job.durationText}</div>
                  </div>
                  <div className={styles.divider} />
                  <ul className={styles.jobList}>
                    {job.achievements.map((a, index) => (
                      <li key={index}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
