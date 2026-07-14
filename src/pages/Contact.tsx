import React from 'react';
import { Button } from '../components/buttons/Button';
import { Input } from '../components/forms/Input';
import { Card } from '../components/cards/Card';

const Contact = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Our enterprise specialists are ready to architect your security solution.</p>
  </div>

      
      <section className="py-24 px-8 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Company Email" type="email" />
            <Input placeholder="Organization Name" />
            <textarea 
              className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors h-32" 
              placeholder="How can we help?" 
            />
            <Button variant="primary" size="lg" className="w-full">Submit Request</Button>
          </form>
        </div>
        <div>
          <div className="h-full min-h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex items-center justify-center">
            <span className="text-[var(--color-text-secondary)]">Google Map Placeholder</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
