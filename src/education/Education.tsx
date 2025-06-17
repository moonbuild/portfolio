import "./education.css";
const Education = () => {
  return (
    <section>
      <div className="heading">
        <span className="heading-text">
          <span className="heading-number">II.</span>
          <span className="heading-title">Education</span>
        </span>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="edu-date">2009 - 2019</div>
            <div className="edu-title">1st- 10th Schooling</div>
            <div className="edu-institution">St. Peter's Modal School</div>
            <div className="edu-description">
              Completed my schooling with a strong base in academics and core
              subjects
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="edu-date">2019 - 2021</div>
            <div className="edu-title">11th - 12th MPC Intermediate</div>
            <div className="edu-institution">
              Nano Junior College, Nallakunta, Hyderabad, India
            </div>
            <div className="edu-description">
              Studied core science subjects with a focus on problem solving and
              logic.
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="edu-date">2021 - 2025</div>
            <div className="edu-title">Bachelor of Technology, DSAI</div>
            <div className="edu-institution">ICFAI University</div>
            <div className="edu-description">
              Graduation in August 2025, I'm specializing in Data Science and
              Artifical Intelligence. During my time here, I've come to
              understand the real value of technology and projects, which pushed
              me to work harder and grow as a developer.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
