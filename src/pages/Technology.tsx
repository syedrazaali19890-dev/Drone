import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const Technology = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-24 md:pt-40 pb-20 px-4 md:px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Technology Platform</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">The Lattice OS: A singular intelligence binding all operational nodes.</p>
  </div>

      
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Artificial Intelligence</h3>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8">Our models don't just react; they predict. Analyzing millions of data points per second to identify anomalies before they become threats.</p>
          </div>
          <div className="h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl" />
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Sensor Fusion</h3>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8">Aggregating optical, thermal, radar, and acoustic telemetry into a single unified operating picture.</p>
          </div>
        </div>
      </section>
      
  <div className="py-16 md:py-24 px-4 md:px-8 bg-[var(--color-bg-primary)] text-center">
    <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to get started?</h2>
    <Button variant="primary" size="lg">Contact Us Today</Button>
  </div>

    </div>
  );
};

export default Technology;
