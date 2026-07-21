import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-mono font-medium tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[var(--color-accent)] text-black hover:opacity-90",
    secondary: "bg-white text-black hover:bg-[var(--color-text-secondary)]",
    ghost: "bg-transparent text-white hover:text-[var(--color-accent)]",
    outline: "bg-transparent border border-[var(--color-border)] text-white hover:border-[var(--color-accent)]"
  };

  // Enforce min-h-[48px] minimum touch target size globally for accessibility
  const sizes = {
    sm: "px-4 py-2 text-xs min-h-[48px]",
    md: "px-6 py-3 text-sm min-h-[48px]",
    lg: "px-4 md:px-8 py-4 text-base min-h-[56px]"
  };

  return (
    <button className={twMerge(clsx(baseClasses, variants[variant], sizes[size], className))} {...props}>
      {children}
    </button>
  );
};
