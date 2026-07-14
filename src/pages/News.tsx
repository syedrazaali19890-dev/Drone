import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const News = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">News & Insights</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">The latest updates from the forefront of defense technology.</p>
  </div>

      
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-heading font-bold text-white mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <Card key={item} variant="default" className="group cursor-pointer">
              <div className="h-48 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]" />
              <div className="p-8">
                <div className="text-[var(--color-accent)] text-xs font-mono uppercase tracking-widest mb-3">Press Release</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">Major milestone achieved in autonomous tracking {`${item}`}</h3>
                <div className="text-[var(--color-text-secondary)] text-sm">October 12, 2026</div>
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

export default News;
