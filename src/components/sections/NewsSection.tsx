import React from 'react';
import { Card } from '../cards/Card';
import { Button } from '../buttons/Button';

export const NewsSection = () => {
  return (
    <section className="py-32 px-8 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Latest Updates</h2>
        </div>
        <Button variant="ghost">View Newsroom</Button>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(item => (
          <Card key={item} variant="default" className="group cursor-pointer">
            <div className="h-48 bg-[var(--color-surface)] w-full relative overflow-hidden" />
            <div className="p-6">
              <div className="text-[var(--color-accent)] text-xs font-mono uppercase tracking-widest mb-3">Press Release</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">Antigravity secures $500M contract for next-gen border security</h3>
              <div className="text-[var(--color-text-secondary)] text-sm">October 12, 2026</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
