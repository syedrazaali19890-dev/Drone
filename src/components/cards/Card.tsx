import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass';
}

export const Card = ({ variant = 'default', className, children, ...props }: CardProps) => {
  const baseClasses = "rounded-[var(--radius-lg)] overflow-hidden transition-all duration-500 ease-out outline-none";
  
  const variantClasses = {
    default: "bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 hover:-translate-y-2 focus-visible:border-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50",
    glass: "bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white/50"
  };

  return (
    <div 
      className={twMerge(clsx(baseClasses, variantClasses[variant], className))} 
      tabIndex={0} // Make focusable for accessibility testing of focus state
      {...props}
    >
      {children}
    </div>
  );
};
