import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StaggerContainer = ({ children, className = '', staggerAmount = 0.2 }: { children: React.ReactNode; className?: string; staggerAmount?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const el = ref.current;
    const childrenNodes = el.children;
    
    gsap.fromTo(childrenNodes,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: staggerAmount,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );

    return () => { ScrollTrigger.getById(el.id)?.kill(); };
  }, [staggerAmount]);

  return <div ref={ref} className={className}>{children}</div>;
};
