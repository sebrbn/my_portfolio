
import React from 'react';
import ExperienceCard from '@/components/ExperienceCard';
import experiences from '@/data/experiences';

const Experience = () => {
  return (
    <div>
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">My Experience</h1>
            <p className="text-xl text-muted-foreground">
              Professional journey and educational background that shape my expertise.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-muted space-y-10 mb-16">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[calc(0.625rem)]" />
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Professional Skills</h2>
          <p className="text-muted-foreground mb-8">
            Key competencies that I bring to every project and workplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 bg-card">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Python (Django, Flask)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>JavaScript/TypeScript</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>HTML, CSS, JavaScript</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Database Systems (MySQL, PostgreSQL)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Digital Infrastructure Management</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Data Analysis</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Machine Learning & Business Strategies</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Problem-Solving</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Client Relationship Management</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Team Leadership</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Time Management</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Effective Communication</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Event Coordination</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                <span>Peer-to-Peer Learning Facilitation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Languages</h2>
          <p className="text-muted-foreground mb-8">
            Communication skills across multiple languages.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-card text-center">
              <h3 className="font-semibold text-lg mb-2">English</h3>
              <p className="text-sm text-muted-foreground">Fluent</p>
            </div>
            <div className="p-6 border rounded-lg bg-card text-center">
              <h3 className="font-semibold text-lg mb-2">Malayalam</h3>
              <p className="text-sm text-muted-foreground">Native</p>
            </div>
            <div className="p-6 border rounded-lg bg-card text-center">
              <h3 className="font-semibold text-lg mb-2">Hindi</h3>
              <p className="text-sm text-muted-foreground">Conversational</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
