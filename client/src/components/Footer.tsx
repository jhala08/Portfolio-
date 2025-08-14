import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-slate-900 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 mb-4" data-testid="footer-copyright">
          © 2025 Kushal Singh Jhala. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm" data-testid="footer-tagline">
          Crafted with creativity and code
        </p>
      </div>
    </footer>
  );
};

export default Footer;
