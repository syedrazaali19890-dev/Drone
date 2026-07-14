import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * StickyNavbar Component
 */
export const StickyNavbar = ({ children, className, ...props }: any) => {
  return (
    <div className={twMerge(clsx('', className))} {...props}>
      {children}
    </div>
  );
};
