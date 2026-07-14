import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Note: For a true enterprise setup without SplitType, we can use a mask reveal approach
export const RevealText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const el = ref.current;
    const textElement = el.querySelector('.reveal-inner');
    
    gsap.fromTo(textElement,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        }
      }
    );

    return () => { ScrollTrigger.getById(el.id)?.kill(); };
  }, [delay]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="reveal-inner inline-block">{text}</div>
    </div>
  );
};
