
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Globe, Github } from 'lucide-react';
import projects from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  // Get related projects (excluding current project)
  const relatedProjects = projects
    .filter(p => p.id !== id)
    .slice(0, 3);

  if (!project) {
    return (
      <div className="section-container text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-secondary/30 py-12">
        <div className="container px-4 md:px-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar size={14} /> {project.date}
            </Badge>
            <Badge variant="outline">{project.category}</Badge>
          </div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full rounded-lg object-cover aspect-video"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>
              <p className="text-muted-foreground mb-6">
                This project was designed to create a modern, user-friendly website that effectively communicates the brand's message and services. The design prioritizes clean aesthetics, intuitive navigation, and responsive behavior across all devices.
              </p>
              <p className="text-muted-foreground">
                Key features include a dynamic service showcase, portfolio gallery, team introduction, and streamlined contact form. The implementation leverages modern web technologies to ensure optimal performance and maintainability.
              </p>
            </div>
            
            <div>
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="font-semibold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Client
                    </h4>
                    <p>{project.title.split('-')[0].trim()}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Timeline
                    </h4>
                    <p>6 weeks</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {project.link && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        Links
                      </h4>
                      <div className="space-y-2">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Globe size={14} /> Live Preview
                        </a>
                        <a 
                          href="https://github.com/sebinrobin" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Github size={14} /> Source Code
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">
                The main challenge was creating a website that effectively communicated the client's unique value proposition while ensuring a seamless user experience across all devices. Additionally, we needed to implement complex functionality like interactive maps and custom booking forms while maintaining fast load times.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground">
                We implemented a responsive design using modern front-end technologies, optimized images and assets for quick loading, and created custom components that enhanced user engagement without sacrificing performance. The final product successfully balances aesthetic appeal with functional efficiency.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src={project.image} 
                alt="Project screenshot 1" 
                className="rounded-lg object-cover w-full aspect-video"
              />
              <img 
                src={project.image} 
                alt="Project screenshot 2" 
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">More Projects</h2>
          <p className="text-muted-foreground">
            Explore more of my work and see what I can do for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
