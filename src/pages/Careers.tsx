import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const Careers = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-24 md:pt-40 pb-20 px-4 md:px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Careers</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Build the future of security. Join a team of uncompromising innovators.</p>
  </div>

      
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">Open Positions</h2>
        <div className="space-y-4">
          {['Senior AI Engineer', 'Robotics Systems Lead', 'Hardware Integration Specialist', 'Field Operations Manager'].map(role => (
            <Card key={role} variant="feature" className="p-6 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{role}</h3>
                <p className="text-[var(--color-text-secondary)]">Engineering • Full Time • Remote / On-site</p>
              </div>
              <Button variant="primary" className="mt-4 md:mt-0">Apply Now</Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
