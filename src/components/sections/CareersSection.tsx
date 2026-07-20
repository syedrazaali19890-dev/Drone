import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../buttons/Button';

export const CareersSection = () => {
  return (
    <section className="relative w-full bg-black py-40 border-t border-[#111] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/manufacturing_5.jpg" 
          alt="Manufacturing Facility" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/50 font-mono text-xs tracking-[0.2em] uppercase mb-6 block">
            05 // Join The Team
          </span>
          <h2 className="text-white text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 leading-[1.1] uppercase">
            Shape The <br />
            <span className="text-white">Future</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed font-sans font-medium mb-12 max-w-2xl mx-auto">
            We are looking for the world's best machinists, engineers, and programmers to help us redefine precision manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Button variant="primary" size="lg" className="rounded-none border border-white bg-white text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold text-sm px-10 py-5 transition-all duration-300 w-full sm:w-auto">
              View Open Roles
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
