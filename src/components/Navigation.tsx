import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glass rounded-full px-6 py-3 animate-fade-in">
      <div className="flex items-center space-x-8">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
          data-testid="nav-home"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
          data-testid="nav-about"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
          data-testid="nav-skills"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
          data-testid="nav-portfolio"
        >
          Portfolio
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
          data-testid="nav-services"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
          data-testid="nav-contact"
        >
          Contact
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full glass hover:bg-primary hover:text-white transition-all"
          data-testid="theme-toggle"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
