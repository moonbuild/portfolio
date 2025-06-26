import { CalendarDays, GraduationCap, MapPinIcon } from 'lucide-react';

import './education.css';

const Education = () => {
  interface EducationDetails {
    key: string;
    duration: string;
    title: string;
    institution: string;
    description: string;
  }

  const educationDetails: EducationDetails[] = [
    {
      key: 'school',
      duration: '2009 - 2019',
      title: '1st- 10th Schooling',
      institution: `St. Peter's Modal School, Nacharam, Hyderabad`,
      description: `
                  Completed my schooling with a strong base in academics and core
                  subjects
                  `,
    },
    {
      key: 'intermediate',
      duration: '2019 - 2021',
      title: '11th - 12th MPC Intermediate',
      institution: `Nano Junior College, Nallakunta, Hyderabad, India`,
      description: `
                  Studied core science subjects with a focus on problem solving and
                  logic.
                  `,
    },
    {
      key: 'university',
      duration: '2021 - 2025',
      title: 'Bachelor of Technology, DSAI',
      institution: `ICFAI University`,
      description: `
                  Graduating in August 2025, I'm specializing in Data Science and Artifical Intelligence.
                  During my time here, I've experimented with various technologies and frameworks via 
                  projects and gained a solid foundation.
                `,
    },
  ];

  return (
    <section id="education" className="education">
      <div className="heading">
        <div className="heading-text">
          <span className="heading-number">II.</span>
          <span className="heading-title">Education</span>
        </div>
      </div>
      <div className="timeline">
        {educationDetails.map(({ key, duration, title, institution, description }) => (
          <div key={key} className="timeline-item">
            <div className="timeline-card">
              <div className="edu-date">
                <CalendarDays size={18} />
                {duration}
              </div>
              <div className="edu-title">
                <GraduationCap size={18} />
                {title}
              </div>
              <div className="edu-institution">
                <MapPinIcon size={18} />
                {institution}
              </div>
              <div className="edu-description">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
