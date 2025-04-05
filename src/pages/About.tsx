
import React from 'react';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';
import SkillSection from '@/components/SkillSection';
import skills from '@/data/skills';

const About = () => {
  return (
    <div>
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know more about my background, skills, and what drives me.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am Sebastian Robin, a software engineer with a solid academic foundation in engineering principles and a passion for innovation. Eager to apply my knowledge to real-world challenges, with a focus on problem-solving and developing efficient, sustainable solutions.
              </p>
              <p>
                Driven by curiosity and a commitment to continuous learning, I blend technical skills with a dynamic, growth-oriented mindset. My educational background has equipped me with strong analytical abilities, while my professional experiences have honed my practical skills in a dynamic environment.
              </p>
              <p>
                I believe in creating technology that not only solves problems but does so with elegance and sustainability in mind. My approach combines technical rigor with creative thinking, always aiming for solutions that stand the test of time.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-primary/0 blur opacity-70" />
            <img
              src="/lovable-uploads/8cd4aaf9-659d-47ad-b17d-5203c91dd42e.png"
              alt="Sebastian Robin"
              className="relative rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </section>
      
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">
            I've developed a range of technical and soft skills that help me deliver exceptional results.
          </p>
        </div>
        
        <SkillSection skills={skills} />
      </section>
      
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground">
            My academic foundation and continuous learning through professional certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Rajagiri School of Engineering and Technology</h3>
                <p className="text-muted-foreground">Bachelor of Technology in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">2023-2027 (Expected)</p>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Rajagiri Christu Jayanthi Public School</h3>
                <p className="text-muted-foreground">High School Education</p>
                <p className="text-sm text-muted-foreground">2021-2023</p>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">TensorFlow</h3>
                <p className="text-muted-foreground">Google Certified TensorFlow Developer</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Computer Society of India</h3>
                <p className="text-muted-foreground">AI Certificate</p>
                <p className="text-sm text-muted-foreground">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Personal Interests</h2>
          <p className="text-muted-foreground mb-8">
            Beyond coding and development, I enjoy activities that help me stay balanced and creative.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-medium text-lg mb-2">Reading</h3>
              <p className="text-sm text-muted-foreground">Technical books and science fiction</p>
            </div>
            <div className="p-6 bg-background rounded-lg text-center">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="font-medium text-lg mb-2">Fitness</h3>
              <p className="text-sm text-muted-foreground">Running and strength training</p>
            </div>
            <div className="p-6 bg-background rounded-lg text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-medium text-lg mb-2">Travel</h3>
              <p className="text-sm text-muted-foreground">Exploring new cultures and landscapes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
