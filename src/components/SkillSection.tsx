
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillSectionProps {
  skills: SkillCategory[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((category, index) => (
        <div key={index} className="border rounded-lg p-6 bg-card">
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} variant="outline" className="skill-badge">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
