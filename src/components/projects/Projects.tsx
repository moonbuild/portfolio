import { useRef, useState } from 'react';
import { Code, Fullscreen, Pause, Play } from 'lucide-react';

import './projects.css';

const Projects = () => {
  interface ProjectDetails {
    key: string;
    video: boolean;
    path: string;
    title: string;
    description: string;
    techStack: string[];
    repoLink?: string;
  }

  const projectDetails: ProjectDetails[] = [
    {
      key: 'brain-vis1',
      video: true,
      path: '/portfolio/projects/brain-vis.mp4',
      title: 'Brain Visualisation',
      description: `
      Built a web application using React, Vite and Typescript for EEG data visualization in neuroscience research.
      Integrated FastAPI with MNE Python for signal filtering, artifact removal, event annotation and epoch analysis.
       Added topomap and PSD visualisations to enhance interpretation of EEG signals.`,
      techStack: ['React', 'Typescript', 'TailwindCSS', 'Python', 'FastAPI', 'Zustand'],
    },
    {
      key: 'face-landmark',
      video: false,
      path: '',
      title: 'Face Landmark Detection',
      description: `Built a lightweight CNN model for fast real time detection of facial features like 
      eyes, nose and mouth. Employed advanced normalization and data augumentation techniques to enhance model robustness, achieving 90%+ accuracy and under 100ms inference.
      Optimized architecture and applied pruning to reduce model size by 60% without losing performance.`,
      techStack: ['Python', 'Tensorflow'],
    },
    {
      key: 'e-commerce',
      video: false,
      path: '',
      title: 'E Commerce Website',
      description: `
                  Built a web application with backend and frontend from scratch during my internship at SCR. 
                  Desinged a SQL database for 600+ products , integrated inventory and order tracking, and added role based-access for Sellers, Buyers, and Admins improving efficiency by 40%. 
                  Designed for scalibility as application is expected to have 1000 operations every day
                `,
      techStack: ['PHP', 'PostgreSQL', 'TailwindCSS'],
    },
  ];
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [pausedVideos, setPausedVideos] = useState<Set<string>>(
    new Set(projectDetails.map((project) => project.key)),
  );

  const toggleVideo = (key: string) => {
    const videoRef = videoRefs.current[key];

    if (videoRef) {
      if (videoRef.paused) {
        videoRef.play();
        setPausedVideos((prev) => {
          const newSet = new Set(prev);
          prev.delete(key);
          return newSet;
        });
      } else {
        videoRef.pause();
        setPausedVideos((prev) => new Set(prev).add(key));
      }
    }
  };

  return (
    <section className="projects">
      <div className="heading">
        <div className="heading-text">
          <span className="heading-number">III.</span>
          <span className="heading-title">Projects</span>
        </div>
      </div>
      <div className="projects-grid">
        {projectDetails.map(({ key, video, path, title, description, techStack }) => (
          <div className={`project-card ${video ? 'video-card' : 'image-card'}`} key={key}>
            {video ? (
              <div className="media-container">
                <video
                  ref={(element) => {
                    videoRefs.current[key] = element;
                  }}
                  className="demo-video"
                  muted
                  loop
                >
                  <source src={path} type="video/mp4" />
                  Your browser does not support the video tag
                </video>
                <div className="video-controls">
                  <button className="play-pause-btn" onClick={() => toggleVideo(key)}>
                    {pausedVideos.has(key) ? <Play size={18} /> : <Pause size={18} />}
                  </button>
                  <button className="fullscreen-btn">
                    <Fullscreen size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="media-container">
                <span> Project Image </span>
              </div>
            )}

            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{title}</h3>
              </div>
              <p className="project-description">{description}</p>
              <div className="tech-stack">
                {techStack.map((tag) => (
                  <div key={tag} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="project-actions">
                <button className="project-code-btn">
                  <Code size={18} />
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
