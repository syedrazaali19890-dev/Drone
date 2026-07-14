import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const About = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">About Us</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Securing the world through innovation and uncompromising excellence.</p>
  </div>

      
      <section className="py-24 px-8 max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Story</h2>
        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
          Founded on the principle that absolute security is a prerequisite for progress, Antigravity has grown into a global leader in autonomous defense systems. Our journey is defined by relentless innovation.
        </p>
      </section>

      <section className="py-24 px-8 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h2>
            <p className="text-[var(--color-text-secondary)] text-lg">To provide impenetrable, intelligent defense infrastructure that adapts faster than the threats it neutralizes.</p>
          </div>
          <div className="h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-[1440px] mx-auto text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Core Values</h2>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 'Uncompromising Quality', 'Relentless Innovation', 'Absolute Integrity', 'Global Responsibility', 'Adaptive Resilience', 'Mission First' ].map(value => (
            <Card key={value} variant="feature" className="p-8 text-center h-48 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">{value}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[1440px] mx-auto text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Executive Leadership</h2>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(leader => (
            <div key={leader} className="text-center">
              <div className="w-full aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl mb-4" />
              <h3 className="text-xl font-bold text-white">Executive Name</h3>
              <p className="text-[var(--color-text-secondary)] text-sm">Chief Officer</p>
            </div>
          ))}
        </div>
      </section>

      
  <div className="py-24 px-8 bg-[var(--color-bg-primary)] text-center">
    <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to get started?</h2>
    <Button variant="primary" size="lg">Contact Us Today</Button>
  </div>

    </div>
  );
};

export default About;
