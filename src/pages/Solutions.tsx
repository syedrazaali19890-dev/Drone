import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const Solutions = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Solutions</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Comprehensive, multi-domain defense frameworks engineered for the modern threat landscape.</p>
  </div>

      
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl" />
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Air & Space Solutions</h2>
            <p className="text-[var(--color-text-secondary)] mb-6 text-lg">Next-generation interception and autonomous aerial dominance networks.</p>
            <Button variant="secondary">Explore Air Systems</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Land Solutions</h2>
            <p className="text-[var(--color-text-secondary)] mb-6 text-lg">Ground-based autonomous nodes providing impenetrable perimeter security.</p>
            <Button variant="secondary">Explore Land Systems</Button>
          </div>
          <div className="order-1 md:order-2 h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl" />
        </div>
      </section>
      
  <div className="py-24 px-8 bg-[var(--color-bg-primary)] text-center">
    <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to get started?</h2>
    <Button variant="primary" size="lg">Contact Us Today</Button>
  </div>

    </div>
  );
};

export default Solutions;
