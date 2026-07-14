import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const RevealImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current || !imgRef.current) return;

    const container = containerRef.current;
    const img = imgRef.current;

    gsap.fromTo(container,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        }
      }
    );

    gsap.fromTo(img,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img ref={imgRef} src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
