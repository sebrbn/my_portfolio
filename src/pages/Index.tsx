
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '@/data/projects';
import experiences from '@/data/experiences';
import ExperienceCard from '@/components/ExperienceCard';

const Index = () => {
  // Get only the last 3 projects for the homepage
  const featuredProjects = projects.slice(0, 3);
  const latestExperience = experiences[0];

  return (
    <div>
      <HeroSection 
        title="Hi, I'm Sebastian Robin" 
        subtitle="Software Engineer & Problem Solver"
        description="I'm a passionate software engineer with a solid academic foundation in engineering principles and a focus on creating efficient, sustainable solutions. Driven by curiosity and a commitment to continuous learning, I blend technical skills with a dynamic, growth-oriented mindset."
        image="/lovable-uploads/8cd4aaf9-659d-47ad-b17d-5203c91dd42e.png"
      />
      
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Experience</h2>
          <p className="text-muted-foreground">
            With professional experience and a strong educational background, I bring both theoretical knowledge and practical skills to every project.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ExperienceCard experience={latestExperience} />
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/experience">
                View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section-container bg-secondary/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and open to new opportunities. Let's discuss how I can help with your project.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 flex-wrap md:justify-end">
            <div className="bg-background p-6 rounded-lg shadow-sm text-center w-40">
              <div className="font-bold text-3xl mb-2">4+</div>
              <div className="text-muted-foreground text-sm">Years of Experience</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center w-40">
              <div className="font-bold text-3xl mb-2">20+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center w-40">
              <div className="font-bold text-3xl mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
