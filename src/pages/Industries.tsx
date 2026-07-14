import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const Industries = () => {
  const industries = ['Defense', 'Government', 'Manufacturing', 'Transportation', 'Commercial', 'Critical Infrastructure'];
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Industries</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Tailored security architectures for the world's most demanding sectors.</p>
  </div>

      
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {industries.map(ind => (
            <Card key={ind} variant="feature" className="p-8 flex flex-col justify-center min-h-[300px]">
              <h3 className="text-3xl font-bold text-white mb-4">{ind}</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">Protecting vital assets and operations with zero-trust integrated solutions tailored specifically for the {ind.toLowerCase()} sector.</p>
              <div>
                <Button variant="ghost">Learn more about {ind} &rarr;</Button>
              </div>
            </Card>
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

export default Industries;
