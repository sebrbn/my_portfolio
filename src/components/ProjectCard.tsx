
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline">{project.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="skill-badge">{tech}</span>
          ))}
        </div>
        <Link 
          to={`/projects/${project.id}`}
          className="text-sm font-medium text-primary inline-flex items-center hover:underline"
        >
          View Project Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
