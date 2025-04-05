
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

const Projects = () => {
  return (
    <div>
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my work, projects, and contributions.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Development Process</h2>
          <p className="text-muted-foreground mb-12">
            I follow a structured approach to ensure the success of every project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  Understanding your needs, defining project scope, and creating a detailed roadmap for success.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
                <p className="text-muted-foreground">
                  Creating wireframes and interactive prototypes to visualize the end product before development begins.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Writing clean, efficient code following best practices and industry standards.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Testing & Refinement</h3>
                <p className="text-muted-foreground">
                  Rigorous testing and iterative refinement to ensure everything works flawlessly.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                <p className="text-muted-foreground">
                  Smooth deployment to production with careful consideration for performance and security.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">6</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Support & Maintenance</h3>
                <p className="text-muted-foreground">
                  Ongoing support and regular updates to keep everything running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
