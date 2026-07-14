import React from 'react';
import { Card } from '../cards/Card';

export const IndustriesSection = () => {
  const industries = ['Defense', 'Critical Infrastructure', 'Border Security', 'Commercial Aviation'];
  
  return (
    <section className="py-32 px-8 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-white mb-4">Industries We Serve</h2>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <Card key={i} variant="feature" className="p-8 text-center cursor-pointer h-48 flex items-center justify-center group">
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">{ind}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
};
