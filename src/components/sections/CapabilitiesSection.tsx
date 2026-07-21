import React from 'react';
import { Card } from '../cards/Card';

export const CapabilitiesSection = () => {
  const capabilities = [
    { title: 'Air Solutions', desc: 'Advanced drone arrays and interception networks.' },
    { title: 'Land Systems', desc: 'Autonomous ground vehicles and surveillance nodes.' },
    { title: 'Sea Defense', desc: 'Sub-surface detection and autonomous maritime patrols.' },
    { title: 'Cyber Security', desc: 'Zero-trust architecture for mission-critical operations.' }
  ];

  return (
    <section className="py-16 md:py-32 px-4 md:px-8 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-white mb-4">Core Capabilities</h2>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">Scalable infrastructure designed to adapt to any threat vector.</p>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, i) => (
          <Card key={i} variant="feature" className="p-8 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)] transition-colors">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-sm" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">{cap.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
