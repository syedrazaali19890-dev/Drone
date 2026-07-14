import React from 'react';
import { Card } from '../cards/Card';

export const MetricsSection = () => {
  const metrics = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Global Deployments' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '0', label: 'Security Breaches' }
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <Card key={i} variant="statistic">
            <div className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-accent)] mb-2">{m.value}</div>
            <div className="text-[var(--color-text-secondary)] font-medium tracking-wide uppercase text-sm">{m.label}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};
