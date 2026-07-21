import React from 'react';
import { Card } from '../cards/Card';
import { Button } from '../buttons/Button';
import { DynamicImage } from '../media/DynamicImage';

export const FeaturedProductsSection = () => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1440px] mx-auto mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Featured Solutions</h2>
          <p className="text-[var(--color-text-secondary)]">Enterprise-grade systems deployed worldwide.</p>
        </div>
        <Button variant="ghost">View All Products</Button>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(item => (
          <Card key={item} variant="default" className="group cursor-pointer">
            <div className="h-64 bg-[var(--color-bg-secondary)] w-full overflow-hidden relative">
              <DynamicImage mediaId={`product-${item}.jpg`} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Aegis System {item}</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">Advanced interception network capable of neutralizing multi-domain threats.</p>
              <Button variant="secondary" className="w-full">Learn More</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
