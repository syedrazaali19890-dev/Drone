import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const CounterAnimation = ({ end, suffix = "", prefix = "", duration = 2, className = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVal(end);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let target = { value: 0 };

    gsap.to(target, {
      value: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      onUpdate: () => setVal(Math.floor(target.value))
    });
  }, [end, duration]);

  return <span ref={ref} className={className}>{prefix}{val}{suffix}</span>;
};
