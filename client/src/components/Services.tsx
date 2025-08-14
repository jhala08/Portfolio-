import React from 'react';
import { Code2, Brush, Film } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text" data-testid="section-title-services">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition-transform" data-testid="service-web-dev">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Web Development</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Responsive websites with modern frontend technologies and basic backend integration. 
              Focus on user experience and cross-browser compatibility.
            </p>
            <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-2 text-left">
              <li data-testid="service-web-item-1">• Frontend Development</li>
              <li data-testid="service-web-item-2">• Responsive Design</li>
              <li data-testid="service-web-item-3">• UI/UX Implementation</li>
              <li data-testid="service-web-item-4">• Basic Backend Integration</li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition-transform" data-testid="service-design">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Brush className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Graphic Design</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Complete branding solutions including logos, marketing materials, and social media graphics. 
              Creating visual identities that resonate with your audience.
            </p>
            <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-2 text-left">
              <li data-testid="service-design-item-1">• Logo Design</li>
              <li data-testid="service-design-item-2">• Brand Identity</li>
              <li data-testid="service-design-item-3">• Marketing Graphics</li>
              <li data-testid="service-design-item-4">• Social Media Visuals</li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition-transform" data-testid="service-video">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Film className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Video Editing</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Professional video editing for promotional content, social media, and creative projects. 
              Bringing your stories to life through motion and sound.
            </p>
            <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-2 text-left">
              <li data-testid="service-video-item-1">• Promotional Videos</li>
              <li data-testid="service-video-item-2">• Social Media Content</li>
              <li data-testid="service-video-item-3">• Motion Graphics</li>
              <li data-testid="service-video-item-4">• Creative Storytelling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
