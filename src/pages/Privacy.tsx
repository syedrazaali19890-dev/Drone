import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-40 pb-20 px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Privacy Policy</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Effective Date: October 12, 2026</p>
  </div>

      <section className="py-24 px-8 max-w-[800px] mx-auto text-[var(--color-text-secondary)] space-y-6">
        <h2 className="text-2xl font-bold text-white">1. Information Collection</h2>
        <p>We collect information that you provide directly to us when utilizing our services, as well as operational telemetry from deployed hardware nodes.</p>
        <h2 className="text-2xl font-bold text-white">2. Data Security</h2>
        <p>All data is encrypted using military-grade AES-256 protocols and stored on zero-trust architectures.</p>
      </section>
    </div>
  );
};

export default Privacy;
