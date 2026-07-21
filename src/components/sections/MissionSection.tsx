import React from 'react';
import { motion } from 'framer-motion';

export const MissionSection = () => {
  return (
    <section className="relative w-full bg-black py-16 md:py-32 px-6 md:px-16 lg:px-32 border-t border-[#111]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <span className="text-white/50 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
            01 // Our Mission
          </span>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-8 leading-[1.1] uppercase">
            Precision at <br />
            <span className="text-white/50">Scale</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg leading-relaxed font-sans font-medium mb-8">
            RaveMFG is building the next generation of manufacturing technology. Our approach integrates state-of-the-art CNC machining, precision engineering, and automation designed for the most demanding tolerances on Earth.
          </p>
          <p className="text-[#a0a0a0] text-lg leading-relaxed font-sans font-medium mb-10">
            We move faster than traditional machine shops, rapidly delivering high-quality components that power the future.
          </p>
          <a href="/mission" className="group flex items-center text-white text-sm font-bold uppercase tracking-widest hover:text-[#a0a0a0] transition-colors">
            <span className="mr-4">Our Manufacturing Vision</span>
            <span className="block w-8 h-[1px] bg-white group-hover:bg-[#a0a0a0] transition-colors" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-[4/5] w-full"
        >
          <div className="absolute inset-0 bg-[#111] z-0" />
          <img 
            src="/manufacturing_1.jpg" 
            alt="Precision Manufacturing" 
            className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-700 opacity-80"
          />
          {/* Tech overlay decorations */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
            <div className="w-2 h-2 bg-white/80" />
            <div className="w-2 h-2 bg-white/40" />
            <div className="w-2 h-2 bg-white/20" />
          </div>
          <div className="absolute bottom-4 right-4 z-20 border-r-2 border-b-2 border-white/50 w-16 h-16" />
        </motion.div>

      </div>
    </section>
  );
};
