import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text" data-testid="section-title-about">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6" data-testid="about-journey-title">
              My Creative Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed" data-testid="about-description-1">
              As a creative freelance developer and designer, I blend technical expertise with artistic vision 
              to create exceptional digital experiences. Currently pursuing my Master's in Computer Applications 
              at Silver Oak University, I've been delivering high-quality web development, graphic design, and 
              video editing services since 2022.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed" data-testid="about-description-2">
              My approach combines modern frontend technologies with creative problem-solving, ensuring every 
              project not only functions flawlessly but also tells a compelling visual story. From responsive 
              websites to brand identities and promotional videos, I bring ideas to life through code and creativity.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="trait-fast-learner">
                Fast Learner
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium" data-testid="trait-detail-oriented">
                Detail-Oriented
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium" data-testid="trait-problem-solver">
                Creative Problem-Solver
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Modern web development workspace with dual monitors" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow" 
              data-testid="img-workspace-1"
            />
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Creative design workspace with laptop" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8" 
              data-testid="img-workspace-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Graphics tablet and design tools workspace" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-8" 
              data-testid="img-workspace-3"
            />
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Video editing workspace with multiple screens" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow" 
              data-testid="img-workspace-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
