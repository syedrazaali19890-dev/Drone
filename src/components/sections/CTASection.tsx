import React from 'react';
import { Button } from '../buttons/Button';

export const CTASection = () => {
  return (
    <section className="py-32 px-8 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1000px] mx-auto glass-panel p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to secure your future?</h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-xl mx-auto">
          Contact our enterprise team to discuss how Antigravity can integrate into your existing infrastructure.
        </p>
        <Button variant="primary" size="lg">Contact Us Today</Button>
      </div>
    </section>
  );
};
