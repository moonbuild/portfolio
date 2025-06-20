import './experience.css';

const Experience = () => {
  interface ExperienceDetails {
    key: string;
    duration: string;
    company: string;
    role: string;
    description: string;
  }
  const experienceDetails: ExperienceDetails[] = [
    {
      key: 'scr',
      duration: 'June 2023 - August 2023',
      company: 'South Central Railway',
      role: 'Full Stack Developer',
      description: `Developed comprehensive backend server solutions with advanced database operations, while creating intuitive frontend interfaces.
       Built multiple applications from scratch and led the development of a large-scale backend project managing over 10,000 records with optimal performance and reliability.`,
    },
    {
      key: 'kalories',
      duration: 'February 2024 - August 2024',
      company: 'Kalories',
      role: 'Full Stack Developer',
      description: `
      Led key website design improvements that enhance the user interface and increased engagement by 15%. Designed a custom 
      customer support AI voice agent leveraging advanced transcription and text-to-speech API's, contributing to 20% boost in sales. 
      `,
    },
    {
      key: 'xyenta',
      duration: 'August 2024 - June 2025',
      company: 'Xyenta Solutions',
      role: 'Full Stack Developer',
      description: `
      Implemented end to end ETL pipelines in Azure Data Factory, incorporating SCD Type 1 and 2 to preserve historical data integrity.
      Handled re-designing a 15 page frontend UI section using clean and reusable components.
      Enhanced a node based workflow with advanced React Flow features like animated zoom upon node selection, improving user navigation.
      Built a centralized input system to standardize form handling across the application.
      Led the migration from a third party UI library to vanialla CSS and custom state management and resolved complex UI issues to optimize rendering performance.
      Adopted Zustand for global state management avoiding prop drilling
      `,
    },
  ];
  return (
    <section className="experience">
      <div className="heading">
        <div className="heading-text">
          <span className="heading-number">IV.</span>
          <span className="heading-title">Experience</span>
        </div>
      </div>
      <div className="heading-container">
        <div className="timeline">
          {experienceDetails.map(({ key, duration, company, role, description }) => (
            <div key={key} className="timeline-item">
              <div className="timeline-card">
                <div className="exp-date">{duration}</div>
                <div className="exp-company">{company}</div>
                <div className="exp-role">{role}</div>
                <div className="exp-description">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
