
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold">Sebastian Robin</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <Button asChild>
            <a href="/contact">Let's Talk</a>
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
            <Link to="/experience" className="nav-link" onClick={toggleMenu}>Experience</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
