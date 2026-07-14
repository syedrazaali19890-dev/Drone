import React from 'react';

const Terms = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Terms & Conditions</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Effective Date: October 12, 2026</p>
  </div>

      <section className="py-24 px-8 max-w-[800px] mx-auto text-[var(--color-text-secondary)] space-y-6">
        <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
        <p>By accessing or deploying Antigravity systems, you agree to be bound by these terms.</p>
        <h2 className="text-2xl font-bold text-white">2. Usage Restrictions</h2>
        <p>Our hardware and software may only be deployed by authorized entities within designated operational parameters.</p>
      </section>
    </div>
  );
};

export default Terms;
