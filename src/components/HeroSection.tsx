
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  description,
  image 
}) => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter md:leading-none mb-3">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic">
                {subtitle}
              </p>
            </div>
            <p className="text-muted-foreground max-w-prose">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          {image && (
            <div className="flex-1 w-full max-w-sm mx-auto md:max-w-none">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-primary/0 blur opacity-70" />
                <img
                  src={image}
                  alt="Sebastian Robin"
                  className="relative rounded-lg object-cover w-full aspect-square md:aspect-auto md:h-[500px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
