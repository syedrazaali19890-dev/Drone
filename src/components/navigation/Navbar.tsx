import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const links = ['Systems', 'Defense', 'Security', 'Company'];

  return (
    <header className={twMerge(clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-6'
    ))}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 z-50 rounded-none font-bold">
        Skip to main content
      </a>

      <nav aria-label="Primary Navigation" className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" aria-label="RaveMFG Home" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
          <img src="/logo.png" alt="" className="w-8 h-8 object-contain mix-blend-screen" />
          <span className="text-white text-xl md:text-2xl font-sans font-bold tracking-[0.15em] uppercase">
            RAVEMFG
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12" role="menubar">
          {links.map(link => (
            <a 
              key={link} 
              href={`/${link.toLowerCase()}`} 
              role="menuitem"
              className="text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white px-2 py-1"
            >
              {link}
            </a>
          ))}
          <a href="/contact" className="border border-white/30 px-6 py-2 text-xs text-white uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-black transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          ref={toggleRef}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          className="md:hidden text-white p-2 min-h-[48px] min-w-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={clsx("w-6 h-0.5 bg-white mb-1.5 transition-transform", mobileMenuOpen && "rotate-45 translate-y-2")} aria-hidden="true" />
          <div className={clsx("w-6 h-0.5 bg-white transition-opacity", mobileMenuOpen && "opacity-0")} aria-hidden="true" />
          <div className={clsx("w-6 h-0.5 bg-white mt-1.5 transition-transform", mobileMenuOpen && "-rotate-45 -translate-y-2")} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-8"
          >
            <button 
              aria-label="Close menu"
              className="absolute top-6 right-6 text-white text-xl p-4 min-h-[48px] min-w-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center space-y-8" role="menu">
              {links.map((link, i) => (
                <motion.a 
                  key={link} 
                  href={`/${link.toLowerCase()}`}
                  role="menuitem"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-3xl font-sans font-bold tracking-wider uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white px-4 py-2"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
