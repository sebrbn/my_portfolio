
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Sebastian Robin</h3>
            <p className="text-muted-foreground max-w-xs">
              A passionate software engineer focused on creating efficient, sustainable solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com/sebinrobin" className="contact-link" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/in/sebinrobin" className="contact-link" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:seb.robin@gmail.com" className="contact-link">
                <Mail size={18} /> seb.robin@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sebastian Robin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
