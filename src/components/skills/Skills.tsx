import { Bot, Hammer, SquareDashedMousePointer, Webhook } from 'lucide-react';
import './skills.css';

const Skills = () => {
  interface SkillDetails {
    key: string;
    icon: React.ReactNode;
    category: string;
    skillsList: string[];
  }
  const skillDetails: SkillDetails[] = [
    {
      key: 'frontend',
      icon: <SquareDashedMousePointer size={18} />,
      category: 'Frontend Development',
      skillsList: [
        'React',
        'Vite',
        'Typescript',
        'CSS',
        'TailwindCSS',
        'Zustand',
        'React Router Dom',
      ],
    },
    {
      key: 'backend',
      icon: <Webhook size={18} />,
      category: 'Backend Development',
      skillsList: ['Python', 'FastAPI', 'SQL', 'PostgreSQL'],
    },
    {
      key: 'dsai',
      icon: <Bot size={18} />,
      category: 'Data Science and AI',
      skillsList: ['TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'openCV'],
    },
    {
      key: 'development',
      icon: <Hammer size={18} />,
      category: 'Development & Deployment Tools',
      skillsList: ['Git', 'Git Hooks', 'ESLint', 'CI/CD'],
    },
  ];
  return (
    <section id="skills" className="skills">
      <div className="heading">
        <span className="heading-text">
          <span className="heading-number">V.</span>
          <span className="heading-title">Skills</span>
        </span>
      </div>
      <div className="skills-container">
        {skillDetails.map(({ key, icon, category, skillsList }) => (
          <div key={key} className="skill-card">
            <div className="skills-head">
              <div className="skills-icon">{icon}</div>
              <span className="skills-category">{category}</span>
            </div>
            <div className="skills-list">
              {skillsList.map((tag) => (
                <div className="tag">{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
