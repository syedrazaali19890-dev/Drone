import React from 'react';

export const TechnologySection = () => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Powered by Lattice</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">Our proprietary AI operating system integrates all domains into a single pane of glass.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-white mb-6">Computer Vision</h3>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8 leading-relaxed">
              Real-time object detection and classification using advanced neural networks. Our systems can identify threats in zero-visibility conditions across multiple sensor modalities.
            </p>
          </div>
          <div className="order-1 lg:order-2 h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="h-[400px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Autonomous Navigation</h3>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8 leading-relaxed">
              GPS-denied environments are no longer a barrier. Our proprietary SLAM algorithms allow our hardware to map and navigate complex terrains completely autonomously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
