import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // Create a simple text-based resume for download
    const resumeContent = `KUSHAL SINGH JHALA
Ahmedabad, Gujarat (Home: Udaipur, Rajasthan) | +91 82792 50518 | kushalsinghjhala21092003@gmail.com

SUMMARY
Creative freelance web developer, graphic designer, and video editor with experience in website development, digital design, and content creation. Skilled in building responsive, user-friendly websites using frontend technologies with basic backend integration. Proficient in branding, marketing graphics, social media content, and video editing for promotional and creative projects.

EXPERIENCE
Developer, Graphic Designer & Video Editor | 2022 – Present
Delivered web development, graphic design, social media content creation, and video editing services to a variety of clients on a freelance basis. Designed responsive websites with strong frontend functionality and basic backend integration. Created custom UI/UX layouts, branding materials, marketing graphics, and short-form video content for social platforms.

SKILLS
Web Development & Programming: HTML, CSS, JavaScript, Python, Java, Flutter (basic backend knowledge)
Design & Creative Tools: Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Canva, Figma
Video Editing Tools: Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut

EDUCATION
Master of Computer Applications (MCA)
Silver Oak University, Ahmedabad | 2025 – Currently in 3rd Semester

Bachelor of Computer Applications (BCA)
Bhupal Noble's University, Udaipur | 2024

LANGUAGES
English, Hindi`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kushal_Singh_Jhala_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text" data-testid="hero-name-primary">Kushal Singh</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200" data-testid="hero-name-secondary">Jhala</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed" data-testid="hero-title">
            Creative Developer, Graphic Designer & Video Editor
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-2xl mx-auto" data-testid="hero-description">
            Crafting digital experiences through code, design, and motion. 
            Bringing ideas to life with modern web technologies and creative storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all animate-glow"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="px-8 py-4 glass rounded-full font-semibold text-slate-700 dark:text-slate-300 hover:bg-white/20 transition-all"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2 inline" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary text-2xl" />
      </div>
    </section>
  );
};

export default Hero;
