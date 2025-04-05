
import React from 'react';
import { CalendarRange } from 'lucide-react';

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="border rounded-lg p-6 bg-card">
      <h3 className="text-xl font-semibold mb-1">{experience.position}</h3>
      <h4 className="text-lg mb-3 text-primary">{experience.company}</h4>
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <CalendarRange size={16} className="mr-2" />
        {experience.duration}
      </div>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-muted-foreground">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.technologies.map((tech, index) => (
          <span key={index} className="skill-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
