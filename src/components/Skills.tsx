import React from 'react';
import { Code, Palette, Video } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text" data-testid="section-title-skills">Skills & Expertise</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="skill-card glass rounded-3xl p-8 text-center hover:scale-105 transition-transform" data-testid="skill-web-dev">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Code className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Web Development</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm" data-testid="skill-html">HTML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" data-testid="skill-css">CSS</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm" data-testid="skill-javascript">JavaScript</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm" data-testid="skill-python">Python</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm" data-testid="skill-java">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" data-testid="skill-flutter">Flutter</span>
              </div>
            </div>
          </div>

          <div className="skill-card glass rounded-3xl p-8 text-center hover:scale-105 transition-transform" data-testid="skill-design">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: '1s' }}>
              <Palette className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Graphic Design</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm" data-testid="skill-photoshop">Photoshop</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm" data-testid="skill-illustrator">Illustrator</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm" data-testid="skill-indesign">InDesign</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" data-testid="skill-figma">Figma</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm" data-testid="skill-canva">Canva</span>
              </div>
            </div>
          </div>

          <div className="skill-card glass rounded-3xl p-8 text-center hover:scale-105 transition-transform" data-testid="skill-video">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDelay: '2s' }}>
              <Video className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Video Editing</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm" data-testid="skill-premiere">Premiere Pro</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm" data-testid="skill-davinci">DaVinci</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" data-testid="skill-finalcut">Final Cut Pro</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm" data-testid="skill-capcut">CapCut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
