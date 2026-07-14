import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLayout = () => {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] pt-20 pb-10 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="" className="w-8 h-8 object-contain mix-blend-screen" />
            <h2 className="text-xl font-sans font-bold tracking-[0.15em] text-white uppercase">RAVEMFG</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-sm">Building the future with enterprise-grade technology and defense systems.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {['About', 'Careers', 'News', 'Contact'].map(link => (
              <li key={link}><Link to={`/${link.toLowerCase()}`} className="text-[var(--color-text-secondary)] hover:text-white transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <li key={link}><Link to="/terms" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--color-text-secondary)] text-sm">© 2026 RaveMFG. All rights reserved.</p>
      </div>
    </footer>
  );
};
