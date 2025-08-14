import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleStartProject = () => {
    window.location.href = 'mailto:kushalsinghjhala21092003@gmail.com?subject=Project Inquiry&body=Hi Kushal, I would like to discuss a project with you.';
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          <span className="gradient-text" data-testid="section-title-contact">Get In Touch</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-3xl p-8" data-testid="contact-email">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Email</h3>
            <p className="text-slate-600 dark:text-slate-400" data-testid="contact-email-text">
              kushalsinghjhala21092003@gmail.com
            </p>
          </div>

          <div className="glass rounded-3xl p-8" data-testid="contact-phone">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-white text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Phone</h3>
            <p className="text-slate-600 dark:text-slate-400" data-testid="contact-phone-text">
              +91 82792 50518
            </p>
          </div>

          <div className="glass rounded-3xl p-8" data-testid="contact-location">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-white text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Location</h3>
            <p className="text-slate-600 dark:text-slate-400" data-testid="contact-location-text">
              Ahmedabad, Gujarat<br />Udaipur, Rajasthan
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="glass rounded-3xl p-8 max-w-md mx-auto" data-testid="contact-cta">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Ready to work together?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Let's bring your ideas to life through creative development and design.
            </p>
            <button 
              onClick={handleStartProject}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all"
              data-testid="button-start-project"
            >
              <Send className="w-4 h-4 mr-2 inline" />
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
