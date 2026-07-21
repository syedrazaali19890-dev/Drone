import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../buttons/Button';
import gsap from 'gsap';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headlineRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.3 })
      .fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");

    return () => { tl.kill(); };
  }, [isMobile]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full flex items-center justify-start overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-screen scale-105"
        >
          <source src="/milling-ad.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-20 px-6 md:px-16 lg:px-32 w-full mt-24 md:mt-0">
        <div className="max-w-4xl flex flex-col items-start">
          <span className="text-white/70 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-6 block border-l-2 border-white pl-4">
            Precision Engineering
          </span>
          <h1 ref={headlineRef} className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05] md:leading-[0.95] uppercase break-words">
            Advanced <br />
            <span className="text-white">Manufacturing</span>
          </h1>
          <p ref={textRef} className="text-[#a0a0a0] text-base md:text-lg lg:text-xl mb-12 max-w-2xl leading-relaxed font-sans font-medium">
            We utilize state-of-the-art CNC milling technology to deliver unmatched precision, speed, and efficiency for complex industrial components.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mt-4 md:mt-0">
            <Button variant="primary" size="lg" className="rounded-none border border-white bg-white text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold text-xs md:text-sm px-6 py-4 md:px-10 md:py-5 transition-all duration-300 w-full sm:w-auto">
              Explore Systems
            </Button>
            <Button variant="secondary" size="lg" className="rounded-none border border-white/20 bg-transparent text-white hover:border-white uppercase tracking-widest font-bold text-xs md:text-sm px-6 py-4 md:px-10 md:py-5 transition-all duration-300 w-full sm:w-auto text-center">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="hidden md:flex absolute bottom-10 left-6 md:left-16 z-20 flex-col items-start">
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
          <motion.div animate={{ y: [0, 64] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="w-full h-1/2 bg-white" />
        </div>
      </motion.div>
    </section>
  );
};
