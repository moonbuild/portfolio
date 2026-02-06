import { ReactNode, useRef, useState } from 'react';
import styles from './Projects.module.css';
import {
  Bot,
  ExternalLink,
  FileChartColumn,
  Fullscreen,
  Pause,
  Play,
  ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';
import Modal from '@/components/Modal/Modal';

const Projects = () => {
  interface ProjectData {
    key: string;
    title: string;
    description: string;
    techStack: string[];
    repoLink: string;
    tag: string;
    type: 'video' | 'image' | null;
    assetLink: string;
    icon: ReactNode;
  }
  const projectData: ProjectData[] = [
    {
      key: 'brain-vis',
      title: 'Brain Visualisation',
      description:
        'Full-stack EEG platform performing preprocessing, artifact removal, and topomap/PSD visualization using MNE with downloadable batch exports.',
      techStack: ['React', 'TypeScript', 'Zustand', 'TailwindCSS', 'Python', 'FastAPI'],
      repoLink: 'https://github.com/moonbuild/BrainVis',
      tag: 'Data Visualization',
      type: 'video',
      assetLink: '/projects/brain-vis.mp4',
      icon: <FileChartColumn size={24} className={styles.cardIcon} />,
    },
    {
      key: 'face-landmark',
      title: 'Face Landmark Detection',
      description:
        'Optimized CNN for real-time facial landmark detection with reduced model size and sub-100ms inference.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      repoLink: 'https://github.com/moonbuild/face-landmarks',
      tag: 'Machine Learning',
      type: 'image',
      assetLink: '/projects/face-landmark.png',
      icon: <Bot size={24} className={styles.cardIcon} />,
    },
    {
      key: 'ecommerce',
      title: 'E Commerce Website',
      description:
        'SQL-backed e-commerce system with role-based access, hierarchy management, and order lifecycle tracking.',
      techStack: ['PHP', 'JavaScript', 'MySQL', 'TailwindCSS'],
      repoLink: '',
      tag: 'Web Application',
      type: 'image',
      assetLink: '/projects/e-commerce.png',
      icon: <ShoppingCart size={24} className={styles.cardIcon} />,
    },
  ];
  const [selectedProject, setSelectedProject] = useState<ProjectData | undefined>(undefined);

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [pausedVideos, setPausedVideos] = useState<Set<string>>(
    new Set(projectData.map((project) => project.key)),
  );

  const toggleVideo = (key: string) => {
    const videoRef = videoRefs.current[key];

    if (videoRef) {
      if (videoRef.paused) {
        videoRef.play();
        setPausedVideos((prev) => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
      } else {
        videoRef.pause();
        setPausedVideos((prev) => new Set(prev).add(key));
      }
    }
  };

  const handleFullScreen = (key: string) => {
    const video = videoRefs.current[key];
    video?.requestFullscreen();
  };
  const handleModalOpen = (project: ProjectData) => {
    setSelectedProject(project);
  };
  const handleModalClose = () => {
    setSelectedProject(undefined);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <div className={styles.glitchTitle}>
          SELECTED
          <br /> WORKS
        </div>
        <div className={styles.headerMessage}>{`///`} 3 Fetched</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.cardsContainer}>
        {projectData.map((project, index) => {
          const cardColor =
            index === 0 ? styles.groupPurple : index === 1 ? styles.groupGreen : styles.groupPink;
          return (
            <div key={project.key} className={`${styles.card} ${cardColor}`}>
              <div className={`${styles.assetContainer} ${cardColor}`}>
                {/* Project Tag/Category Name */}
                <div className={styles.cardTag}>{project.tag}</div>

                {/* Demo Image */}
                {project.type === 'image' ? (
                  <Image alt={project.key} src={project.assetLink} className={styles.asset} fill />
                ) : (
                  <video
                    ref={(element) => {
                      videoRefs.current[project.key] = element;
                    }}
                    className={styles.asset}
                    preload="auto"
                    muted
                    loop
                  >
                    <source src={project.assetLink} type="video/mp4" />
                    Your browser does not support the video tag
                  </video>
                )}
                <div className={styles.overlayBottom}>
                  {/* Icon */}
                  {/* <div className={styles.cardIcon}>{project.icon}</div> */}
                  {project.type === 'video' && (
                    <div className={styles.videoControls}>
                      <button
                        className={styles.controlBtn}
                        onClick={() => toggleVideo(project.key)}
                      >
                        {pausedVideos.has(project.key) ? <Play size={18} /> : <Pause size={18} />}
                      </button>
                      <button
                        className={styles.controlBtn}
                        onClick={() => handleFullScreen(project.key)}
                      >
                        <Fullscreen size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardBodyTop}>
                  <span className={styles.cardTitle}>{project.title}</span>
                  <span className={styles.cardDescription}>{project.description}</span>
                </div>
                <div className={styles.cardBodyBottom}>
                  <div className={styles.techStack}>
                    {project.techStack.map((t, index) => (
                      <div key={index} className={styles.techTag}>
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className={styles.buttonsContainer}>
                    <button
                      className={styles.demoBtn}
                      onClick={() => {
                        handleModalOpen(project);
                      }}
                    >
                      DEMO
                    </button>
                    <a style={{ textDecoration: 'none' }} href={project.repoLink} target="_blank">
                      <button
                        className={styles.codeBtn}
                        disabled={project.repoLink === ''}
                        title={
                          project.repoLink === '' ? 'Source code is private' : 'View on Github'
                        }
                      >
                        <span className={styles.btnText}>CODE</span>
                        <ExternalLink size={18} className={styles.externalLink} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal title="Demo" isOpen={!!selectedProject} onClose={handleModalClose}>
        {!!selectedProject && (
          <div className={styles.modalContainer}>
            {selectedProject.type === 'image' ? (
              <Image
                alt={selectedProject.key}
                src={selectedProject.assetLink}
                className={styles.modalAsset}
                fill
                priority
              />
            ) : (
              <video
                key={selectedProject.key}
                src={selectedProject.assetLink}
                className={styles.modalAsset}
                preload="auto"
                muted
                loop
                playsInline
                autoPlay={true}
                controls
              />
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
export default Projects;
