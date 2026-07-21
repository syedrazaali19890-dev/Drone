import React from 'react';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/cards/Card';

const Products = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-24 md:pt-40 pb-20 px-4 md:px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Products</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Hardware and software working in perfect unison.</p>
  </div>

      
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">Featured Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <Card key={item} variant="default">
              <div className="h-64 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Hardware Unit {`${item}`}</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">Modular, adaptive, and unbreakable.</p>
                <div className="flex gap-4">
                  <Button variant="primary" className="flex-1">Details</Button>
                  <Button variant="secondary">Specs</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
  <div className="py-16 md:py-24 px-4 md:px-8 bg-[var(--color-bg-primary)] text-center">
    <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to get started?</h2>
    <Button variant="primary" size="lg">Contact Us Today</Button>
  </div>

    </div>
  );
};

export default Products;
