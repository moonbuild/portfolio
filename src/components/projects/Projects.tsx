import { useEffect, useRef, useState } from 'react';
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
      path: '/projects/brain-vis.mp4',
      title: 'Brain Visualisation',
      description: `
      This web application is helps neuroscientists and researchers visualize EEG data as Topomaps, PSD Plots and many such visualisations.
      Utilized MNE Python for signal filtering, artifact removal, event annotation and epoch analysis. Allowed user to download all images as an organised Zip file.
      `,
      techStack: ['React', 'Typescript', 'TailwindCSS', 'Python', 'FastAPI', 'Zustand'],
      repoLink: 'https://github.com/moonbuild/BrainVis',
    },
    {
      key: 'face-landmark',
      video: false,
      path: '/projects/face-landmark.png',
      title: 'Face Landmark Detection',
      description: ` 
      Built a lightweight and fast CNN Model for detecting facial features like eyes, nose, lips.
      Reduced model size by 60% through architecture optimization while preserving detection accuracy.
      Implemented advanced normalization techniques and data augmentation to achieve 90%+ accuracy while maintaining sub-100ms inference time.
      `,
      techStack: ['Python', 'Tensorflow', 'Keras', 'OpenCv'],
      repoLink: 'https://github.com/moonbuild/face-landmarks',
    },
    {
      key: 'e-commerce',
      video: false,
      path: '/projects/e-commerce.png',
      title: 'E Commerce Website',
      description: `
      Designed the SQL database and tables to handle 1000+ operations on a daily basis.
      Added Team hierarchy, Order tracking, role based access for Sellers, Buyers and admins improving efficency by 40%.
      Implemented robust validations for each operation and appropriate alerts to user with Javascript.
                `,
      techStack: ['PHP', 'Javascript', 'MySql', 'TailwindCSS'],
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

  const handleFullScreen = (key: string) => {
    const video = videoRefs.current[key];
    video?.requestFullscreen();
  };

  useEffect(() => {
    const pausedSet = new Set<string>();
    for (const key of projectDetails.map((p) => p.key)) {
      const video = videoRefs.current[key];
      if (video?.paused) {
        pausedSet.add(key);
      }
    }
    setPausedVideos(pausedSet);
  }, [projectDetails]);

  return (
    <section id="projects" className="projects">
      <div className="heading">
        <div className="heading-text">
          <span className="heading-number">III.</span>
          <span className="heading-title">Projects</span>
        </div>
      </div>
      <div className="projects-grid">
        {projectDetails.map(({ key, video, path, title, description, techStack, repoLink }) => (
          <div className={`project-card ${video ? 'video-card' : 'image-card'}`} key={key}>
            {video ? (
              <div className="media-container">
                <video
                  ref={(element) => {
                    videoRefs.current[key] = element;
                  }}
                  className="demo-video"
                  preload="auto"
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
                  <button className="fullscreen-btn" onClick={() => handleFullScreen(key)}>
                    <Fullscreen size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="media-container">
                <img src={path} />
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
                <div className="btn-tooltip-wrapper">
                  <button className={`project-code-btn ${!repoLink ? 'disabled' : ''}`}>
                    <a href={repoLink} target="_blank">
                      <Code size={18} />
                      Code
                    </a>
                  </button>
                  {!repoLink && (
                    <span className="tooltip-message">
                      This project is private, as it is a part of internship
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
