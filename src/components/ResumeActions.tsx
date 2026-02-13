import { useResume } from '@/hooks/resume/useResume';
import { Loader2, RotateCw, Download, Github } from 'lucide-react';

import styles from './ResumeActions.module.css';

const ResumeActions = () => {
  const { download, isLoading, error } = useResume();

  return (
    <div className={styles.actions}>
      <button
        onClick={download}
        className={`${styles.btn} ${styles.btnPrimary} ${isLoading ? styles.loading : error ? styles.error : undefined}`}
        disabled={isLoading}
      >
        {isLoading ? <Loader2 className="animate-spin" /> : error ? <RotateCw /> : <Download />}
        Download Resume
      </button>
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
  );
};

export default ResumeActions;
